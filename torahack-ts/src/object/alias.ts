export default function typeAliasSample() {
  type Country = {
    capital: string
    language: string
    name: string
  }

  const Japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }
  console.log('Object alias sample 1', Japan)

  const America: Country = {
    capital: 'Washington D.C.',
    language: 'English',
    name: 'United Status of America',
  }
  console.log('Object alias sample 2', America)

  // 合併型と交差型
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }
  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  // 合併型...KnightまたはWizardの型をもつ
  type Adventure = Knight | Wizard

  // 交差型...KnightかつWizardの型をもつ
  type Paladin = Knight & Wizard

  // Knight寄りの冒険者
  const adventure1: Adventure = {
    hp: 300,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '三連切り',
  }
  // Wizard寄りの冒険者
  const adventure2: Adventure = {
    hp: 300,
    mp: 30,
    weapon: '木の杖',
    magicSkill: 'ファイアボール',
  }

  console.log('Object alias sample 3', adventure1)
  console.log('Object alias sample 4', adventure2)

  const paladin: Paladin = {
    hp: 300,
    sp: 30,
    mp: 30,
    weapon: '木の剣',
    swordSkill: '三連切り',
    magicSkill: 'ファイアボール',
  }
  console.log('Object alias sample 5', paladin)
}
