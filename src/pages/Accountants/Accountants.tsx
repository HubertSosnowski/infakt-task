import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/useStore'
import { onLoadNewAccountants, onEnterPage } from 'store/accountants/actions'
import { selectAccountantsList } from 'store/accountants/slice';
import { AccountantsStyled, AccountantsWrapper, LoadMoreWrapper } from './Accountants.styled';
import AccountantCard from './AccountantCard/AccountantCard'
import { Button } from 'components/UI/Button';

const Accountants = () => {
  const dispatch = useAppDispatch();
  const accountants = useAppSelector(selectAccountantsList)

  const loadNewAccountants = () => {
    dispatch(onLoadNewAccountants())
  }

  useEffect(() => {
    dispatch(onEnterPage());
  }, [dispatch])

  const generateAccountantsCards = () => accountants.map(accountant => {
    return <AccountantCard accountant={accountant} key={accountant.login.uuid} />
  })

  return (
    <AccountantsStyled>
      <AccountantsWrapper>
        {generateAccountantsCards()}
      </AccountantsWrapper>
      <LoadMoreWrapper>
        <Button text="Załaduj więcej" onButtonClick={loadNewAccountants} />
      </LoadMoreWrapper>
    </AccountantsStyled>
  )
};

export default Accountants; 