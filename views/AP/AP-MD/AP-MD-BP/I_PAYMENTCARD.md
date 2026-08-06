---
name: I_PAYMENTCARD
description: Paymentcard
app_component: AP-MD-BP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - payment
  - component:AP-MD-BP
  - lob:Other
---
# I_PAYMENTCARD

**Paymentcard**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BusinessPartner` | `partner` |
| key `PaymentCardID` | `ccard_id` |
| key `PaymentCardType` | `ccins` |
| key `CardNumber` | `ccnum` |
| `IsStandardCard` | `ccdef` |
| `CardDescription` | `ccaccname` |
| `CollectionIsAuthorized` | `cc_coll_auth` |
| `AuthorizationGroup` | `_BusinessPartner.AuthorizationGroup` |
| `_BusinessPartner` | *Association* |
| `_CardType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_CardType` | `I_Paymentcardtype` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPAYMENTCARD'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Core View for Payment Card'
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@AbapCatalog.preserveKey: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_Paymentcard
  as select from but0cc
  association [1..1] to I_BusinessPartner as _BusinessPartner on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [1..1] to I_Paymentcardtype as _CardType        on  $projection.PaymentCardType = _CardType.PaymentCardType
                                                              and $projection.CardNumber      = _CardType.PaymentCardNumber
   
{

  key    partner                   as BusinessPartner,

  key    ccard_id                  as PaymentCardID,

         @ObjectModel.foreignKey.association: '_CardType'
  key    ccins                     as PaymentCardType,
         @ObjectModel.foreignKey.association: '_CardType'
  key    ccnum                     as CardNumber,

         ccdef                     as IsStandardCard,
         ccaccname                 as CardDescription,
         cc_coll_auth              as CollectionIsAuthorized,
         _BusinessPartner.AuthorizationGroup,

         _CardType,


         @ObjectModel.association.type: [ #TO_COMPOSITION_ROOT,#TO_COMPOSITION_PARENT  ]
         _BusinessPartner

}
```
