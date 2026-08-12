---
name: I_PAYMENTCARD
description: "Paymentcard"
app_component: AP-MD-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` | `CHAR(10)` | Business Partner Number |
| `PaymentCardID` | ✓ | |  | `ccard_id` | `CHAR(6)` | Payment Card ID |
| `PaymentCardType` | ✓ | |  | `ccins` | `CHAR(4)` | Payment Card Type |
| `CardNumber` | ✓ | |  | `ccnum` | `CHAR(25)` | Payment Cards: Card Number |
| `IsStandardCard` |  | |  | `ccdef` | `CHAR(1)` | BP: Standard Payment Card |
| `CardDescription` |  | |  | `ccaccname` | `CHAR(40)` | Description of Credit Card Details |
| `CollectionIsAuthorized` |  | |  | `cc_coll_auth` | `CHAR(1)` | Flag: Authorization for Payment Card Collection |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `_BusinessPartner` | | ✓ | | | | |
| `_CardType` | | ✓ | | | | |

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
