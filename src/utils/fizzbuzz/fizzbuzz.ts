
export const fizzbuzz = (num? : number) =>{
    if(typeof num !== 'number') throw Error('Number not defined')
    if(Number.isNaN(num)) throw Error('parameter is NaN')
    if (num % 3 == 0 && num % 5 == 0){
        return 'fizzbuzz'
    }
    if(num % 3 == 0) return 'fizz'
    
    if(num % 5 == 0)return 'buzz'
    
    const multiplies = {3:'fizz', 5: 'buzz', 7: 'woof'}
    let output = ''
    Object.entries(multiplies)
        .forEach(([key, text]: [string, string] )=> {
            if(num % Number(key) == 0) {
                output += text
            }
        })
    return output === '' ? num : output
}