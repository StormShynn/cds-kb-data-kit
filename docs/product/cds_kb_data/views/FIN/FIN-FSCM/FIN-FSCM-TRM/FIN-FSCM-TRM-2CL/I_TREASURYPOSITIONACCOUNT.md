---
name: I_TREASURYPOSITIONACCOUNT
description: "Treasury Position Account"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TREASURYPOSITIONACCOUNT')/$value
semantic_en: "Treasury Position Account"
semantic_vi: "Treasury Position Account — CDS view giao diện dựa trên trft_pos_account."
keywords:
  - "treasury"
  - "position"
  - "account"
  - "company"
  - "code"
  - "name"
  - "depository"
  - "bank"
tags:
  - FIN
  - account
  - bo:purchaseorder
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
---
# I_TREASURYPOSITIONACCOUNT

**Treasury Position Account**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TREASURYPOSITIONACCOUNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `company_code` | `CHAR(4)` | Company Code |
| `TreasuryPositionAccount` | ✓ | |  | `cast(TreasuryPositionAccount.pos_account as ftr_gen_pos_account_future preserving type)` | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `TreasuryPositionAccountName` |  | |  | `cast(TreasuryPositionAccount.pos_acc_text as ftr_gen_pos_accnt_future_name preserving type)` | `CHAR(30)` | Name of the Futures Account for Listed Options and Futures |
| `DepositoryBank` |  | |  | `cast(TreasuryPositionAccount.pos_acc_bank as ftr_gen_partnr_depository_bank preserving type)` | `CHAR(10)` | Business Partner in Role Depository Bank |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TREASURYPOSITIONACCOUNT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TREASURYPOSITIONACCOUNT')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @AccessControl.authorizationCheck: #CHECK
// Assumption: Depository Bank is organization but  N O T  any private person!!
@AccessControl.personalData.blocking:  #NOT_REQUIRED 
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'ITRPOSACC' 
@Analytics.dataExtraction.enabled : true
@Analytics.internalName: #LOCAL 
@EndUserText.label: 'Treasury Position Account'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'TreasuryPositionAccount'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B 
@ObjectModel.usageType.sizeCategory: #S
@Metadata.allowExtensions:true   
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC

define view entity I_TreasuryPositionAccount
  as select from trft_pos_account as TreasuryPositionAccount
  association to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
{
      //--[ GENERATED:012:GlBfhyJl7kY4pGd}um{aL0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key TreasuryPositionAccount.company_code      as CompanyCode,
      @ObjectModel.text.element: [ 'TreasuryPositionAccountName']
  key cast(TreasuryPositionAccount.pos_account  as ftr_gen_pos_account_future preserving type)
                                                as TreasuryPositionAccount,
      @Semantics.text: true
      cast(TreasuryPositionAccount.pos_acc_text as ftr_gen_pos_accnt_future_name preserving type)
                                                as TreasuryPositionAccountName,

      //      TreasuryPositionAccount.settlement_acc,
      //      TreasuryPositionAccount.pos_acc_number,
      
      cast(TreasuryPositionAccount.pos_acc_bank as ftr_gen_partnr_depository_bank preserving type)
                                                as DepositoryBank,
      
      //      TreasuryPositionAccount.house_bank        as HouseBank,
      //      TreasuryPositionAccount.house_bank_acc    as HouseBankAccount,
      //      TreasuryPositionAccount.rgsber,
      //      TreasuryPositionAccount.rportb            as Portfolio,
      //      TreasuryPositionAccount.rerf,
      //      TreasuryPositionAccount.derf,
      //      TreasuryPositionAccount.terf,
      //      TreasuryPositionAccount.reher,
      //      TreasuryPositionAccount.rbear,
      //      TreasuryPositionAccount.dbear,
      //      TreasuryPositionAccount.tbear,
      //      TreasuryPositionAccount.rbher,
      //      TreasuryPositionAccount.blabla,
      //      TreasuryPositionAccount.attribute_sa01,
      //      TreasuryPositionAccount.attribute_sa02,
      //      TreasuryPositionAccount.attribute_sc03,
      //      TreasuryPositionAccount.attribute_sc04,
      //      TreasuryPositionAccount.attribute_ma01,
      //      TreasuryPositionAccount.attribute_ma02,
      //      TreasuryPositionAccount.attribute_mc03,
      //      TreasuryPositionAccount.attribute_mc04,
      //      TreasuryPositionAccount.attribute_la01,
      //      TreasuryPositionAccount.attribute_la02,
      //      TreasuryPositionAccount.attribute_lc03,
      //      TreasuryPositionAccount.attribute_lc04

      // Associations
      _CompanyCode

}
```
