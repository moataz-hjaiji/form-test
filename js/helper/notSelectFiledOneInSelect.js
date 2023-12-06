export function notSelectFiledOneInSelect(querySelector)
{
  const select = document.querySelector(querySelector);
  return select.selectedIndex !== 0;
}
