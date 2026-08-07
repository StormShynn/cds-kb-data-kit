---
name: I_BR_NFEPAYMENT
description: "BR Nfepayment"
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - payment
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFEPAYMENT

**BR Nfepayment**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NotaFiscal` | ✓ | |  | `docnum` |  |  |
| `SequenceNumber` | ✓ | |  | `counter` |  |  |
| `PaymentMethod` |  | |  | `cast(t_pag as logbr_tpag preserving type)` |  |  |
| `BR_NFPaymentMethodManualDesc` |  | |  | `cast(x_pag as logbr_payment_descr preserving type)` |  |  |
| `PaymentAmount` |  | |  | `cast(v_pag as logbr_vpag)` |  |  |
| `PaymentSystemIntegrationType` |  | |  | `cast(tp_integra as logbr_tpintegra preserving type)` |  |  |
| `BR_CreditCardCompanyCNPJ` |  | |  | `cast(concat(concat(concat(concat(concat( left( cnpj, 2), '.'), concat(right( left( cnpj, 5), 3), '.')), concat(right( left( cnpj, 8), 3), '/')), concat(left( right( cnpj, 6), 4), '-')), right( cnpj, 2)) as logbr_payment_cnpj preserving type)` |  |  |
| `CreditCardBrand` |  | |  | `t_band` |  |  |
| `CreditCardTransactionAuthznID` |  | |  | `cast( substring( c_aut, 1, 20 ) as logbr_caut_old)` |  |  |
| `BR_NFPaytAuthorizationNumber` |  | |  | `c_aut` |  |  |
| `PaymentForm` |  | |  | `cast(ind_pag as logbr_indpag preserving type)` |  |  |
| `BR_CNPJPaymentRecipient` |  | |  | `cast(concat(concat(concat(concat(concat( left( cnpjreceb, 2), '.'), concat(right( left( cnpjreceb, 5), 3), '.')), concat(right( left( cnpjreceb, 8), 3), '/')), concat(left( right( cnpjreceb, 6), 4), '-')), right( cnpjreceb, 2)) as logbr_cnpjpaymentrecipient preserving type)` |  |  |
| `BR_PaymentTerminalIdentifier` |  | |  | `cast(idtermpag as logbr_paymentterminalid preserving type)` |  |  |
| `BR_PaymentDate` |  | |  | `cast(dpag as logbr_paymentdate preserving type)` |  |  |
| `BR_CNPJPaymentTransactional` |  | |  | `cast(concat(concat(concat(concat(concat( left( cnpjpag, 2), '.'), concat(right( left( cnpjpag, 5), 3), '.')), concat(right( left( cnpjpag, 8), 3), '/')), concat(left( right( cnpjpag, 6), 4), '-')), right( cnpjpag, 2)) as logbr_paymenttransactionalcnpj preserving type)` |  |  |
| `BR_RgnEstblmtCNPJPaytMade` |  | |  | `cast(ufpag as logbr_cnpjpaymentregion preserving type)` |  |  |
| `SalesDocumentCurrency` |  | | `_BR_NFDocumentCurrency` | `SalesDocumentCurrency` |  |  |
| `_SalesDocumentCurrency` | | ✓ | | | | |
| `_BR_NotaFiscal` | | ✓ | | | | |
| `_BR_PaymentMethod` | | ✓ | | | | |
| `_BR_PaymentForm` | | ✓ | | | | |
| `_BR_PaymentIntegrationType` | | ✓ | | | | |
| `_BR_CreditCardCompany` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDocumentCurrency` | `I_Currency` | [1..1] |
| `_BR_NFDocumentCurrency` | `I_BR_NFDocumentCurrency` | [1..1] |
| `_BR_NotaFiscal` | `I_BR_NFDocument` | [1..1] |
| `_BR_PaymentMethod` | `I_BR_PaymentMethod` | [0..1] |
| `_BR_PaymentForm` | `I_BR_PaymentForm` | [0..1] |
| `_BR_PaymentIntegrationType` | `I_BR_PaymentIntegrationType` | [0..1] |
| `_BR_CreditCardCompany` | `I_BR_CreditCardCompany` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFEPAYMENT'
@AbapCatalog.compiler.compareFilter: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Brazil NFe Payment Data'
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.modelingPattern: #NONE

define view I_BR_NFePayment
  as select from j_1bnfepayment

  association [1..1] to I_Currency                  as _SalesDocumentCurrency    on  $projection.SalesDocumentCurrency = _SalesDocumentCurrency.Currency
  association [1..1] to I_BR_NFDocumentCurrency     as _BR_NFDocumentCurrency    on  $projection.BR_NotaFiscal = _BR_NFDocumentCurrency.BR_NotaFiscal
  association [1..1] to I_BR_NFDocument             as _BR_NotaFiscal            on  $projection.BR_NotaFiscal = _BR_NotaFiscal.BR_NotaFiscal

  association [0..1] to I_BR_PaymentMethod          as _BR_PaymentMethod          on  _BR_PaymentMethod.PaymentMethod = $projection.PaymentMethod
  association [0..1] to I_BR_PaymentForm            as _BR_PaymentForm            on  _BR_PaymentForm.PaymentForm = $projection.PaymentForm
  association [0..1] to I_BR_PaymentIntegrationType as _BR_PaymentIntegrationType on  _BR_PaymentIntegrationType.PaymentSystemIntegrationType = $projection.PaymentSystemIntegrationType
  association [0..1] to I_BR_CreditCardCompany      as _BR_CreditCardCompany      on  _BR_CreditCardCompany.CreditCardBrand = $projection.CreditCardBrand
{
      @UI.hidden: true
  key docnum                                                                                    as BR_NotaFiscal,

      @UI.lineItem:[{ position:10 }]
  key counter                                                                                   as SequenceNumber,

      @UI.lineItem:[{ position:20 }]
      @ObjectModel.foreignKey.association: '_BR_PaymentMethod'
      cast(t_pag as logbr_tpag preserving type)                                                 as PaymentMethod,

      @UI.lineItem:[{ position:30 }]
      cast(x_pag as logbr_payment_descr preserving type)                                        as BR_NFPaymentMethodManualDesc,

      @UI.lineItem:[{ position:40 }]
      @Aggregation.default:#SUM
      cast(v_pag as logbr_vpag)                                                                 as PaymentAmount,


      @UI.lineItem:[{ position:50 }]
      @ObjectModel.foreignKey.association: '_BR_PaymentIntegrationType'
      cast(tp_integra as logbr_tpintegra preserving type)                                       as PaymentSystemIntegrationType,

      @UI.lineItem:[{ position:60 }]
      cast(concat(concat(concat(concat(concat( left( cnpj, 2), '.'),
                                concat(right( left( cnpj, 5), 3), '.')),           //MASK: __.___.___/____-__
                                concat(right( left( cnpj, 8), 3), '/')),
                                concat(left( right( cnpj, 6), 4), '-')),
                                        right( cnpj, 2)) as logbr_payment_cnpj preserving type) as BR_CreditCardCompanyCNPJ,

      @UI.lineItem:[{ position:70 }]
      @ObjectModel.foreignKey.association: '_BR_CreditCardCompany'
      t_band                                                                                    as CreditCardBrand,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BR_NFPaytAuthorizationNumber'
      @UI.hidden: true
      cast( substring( c_aut, 1, 20 ) as logbr_caut_old)                                        as CreditCardTransactionAuthznID,
      
      @UI.lineItem:[{ position:80 }]
      c_aut                                                                                     as BR_NFPaytAuthorizationNumber,
      
      @UI.lineItem:[{ position:90 }]
      @ObjectModel.foreignKey.association: '_BR_PaymentForm'
      cast(ind_pag as logbr_indpag preserving type)                                             as PaymentForm,
      
      @UI.lineItem: [{ position:100 }]
      cast(concat(concat(concat(concat(concat( left( cnpjreceb, 2), '.'),
                                concat(right( left( cnpjreceb, 5), 3), '.')),           //MASK: __.___.___/____-__
                                concat(right( left( cnpjreceb, 8), 3), '/')),
                                concat(left( right( cnpjreceb, 6), 4), '-')),
                                       right( cnpjreceb, 2)) 
                                        as logbr_cnpjpaymentrecipient preserving type)          as BR_CNPJPaymentRecipient,
      
      @UI.lineItem: [{ position:110 }]
      cast(idtermpag as logbr_paymentterminalid preserving type)                                as BR_PaymentTerminalIdentifier,
      
      @UI.lineItem: [{ position:120 }]
      cast(dpag as logbr_paymentdate preserving type)                                           as BR_PaymentDate,
      
      @UI.lineItem: [{ position:130 }]
      cast(concat(concat(concat(concat(concat( left( cnpjpag, 2), '.'),
                                concat(right( left( cnpjpag, 5), 3), '.')),           //MASK: __.___.___/____-__
                                concat(right( left( cnpjpag, 8), 3), '/')),
                                concat(left( right( cnpjpag, 6), 4), '-')),
                                       right( cnpjpag, 2)) 
                                        as logbr_paymenttransactionalcnpj preserving type)      as BR_CNPJPaymentTransactional,

      @UI.lineItem: [{ position:140 }]
      cast(ufpag as logbr_cnpjpaymentregion preserving type)                                    as BR_RgnEstblmtCNPJPaytMade,

      @Semantics.currencyCode:true
      _BR_NFDocumentCurrency.SalesDocumentCurrency                                              as SalesDocumentCurrency,
      
      _SalesDocumentCurrency,
      _BR_NotaFiscal,
      _BR_PaymentMethod,
      _BR_PaymentForm,
      _BR_PaymentIntegrationType,
      _BR_CreditCardCompany
}
```
