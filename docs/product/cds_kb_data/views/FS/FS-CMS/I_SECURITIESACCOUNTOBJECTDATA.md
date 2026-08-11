---
name: I_SECURITIESACCOUNTOBJECTDATA
description: "Securities Account Object Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITIESACCOUNTOBJECTDATA')/$value
semantic_en: "Securities Account Object Details"
semantic_vi: "Securities Account Object Details — CDS view giao diện dựa trên P_SecuritiesAccountObject_TF."
keywords:
  - "securities"
  - "account"
  - "object"
  - "details"
  - "acct"
  - "internal"
  - "depository"
  - "number"
  - "desc"
tags:
  - FS
  - account
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_SECURITIESACCOUNTOBJECTDATA

**Securities Account Object Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITIESACCOUNTOBJECTDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SecuritiesAccountObjectUUID` | ✓ | |  | `sec_acc_guid` | `RAW(16)` | GUID for securities account |
| `SecuritiesAcctObjInternalID` |  | |  | `sec_acc_guid_conv` | `CHAR(40)` | Reference ID for the object |
| `SecuritiesAcctObjDepositoryBk` |  | |  | `depo_bank_id` | `CHAR(18)` | Depository Bank Identification |
| `SecuritiesAccountObjectNumber` |  | |  | `account_number` | `CHAR(20)` | Securities Account Identification Number |
| `SecuritiesAccountObjDesc` |  | |  | `sec_acc_desc` | `CHAR(30)` | Description of the Securities Account |
| `SecuritiesAcctObjExtRefNmbr` |  | |  | `acc_old_ref_no` | `CHAR(32)` | ID of a Securities Account Referenced from External System |
| `SecuritiesAccountObjValAmt` |  | |  | `sec_acc_val` | `CURR(17)` | Value of the Securities Account |
| `SecuritiesAccountObjValCrcy` |  | |  | `sec_acc_val_curr` | `CUKY(5)` | Currency of Securities Account Value |
| `SecuritiesAccountObjValnDte` |  | |  | `val_date` | `DATS(8)` | Date of last valuation |
| `CollateralAdminOrgUnit` |  | |  | `admin_org_unit` | `CHAR(12)` | Administration Organizational Unit |
| `CollateralBankArea` |  | |  | `bankarea` | `CHAR(4)` | Bank Area in Collateral Management |
| `SecuritiesAccountObjRiskCode` |  | |  | `risk_code` | `CHAR(6)` | Risk Code |
| `SecuritiesAcctObjSftyDiscSign` |  | |  | `sfty_ind` | `CHAR(2)` | Indicates that the asset has a default sfty discount or not |
| `SecuritiesAcctObjSftyDiscPct` |  | |  | `sfty_dscnt` | `DEC(10)` | Safety discount |
| `SecuritiesAcctObjSftyDiscAmt` |  | |  | `sfty_amount` | `CURR(17)` | Safety discount as an amount |
| `SecuritiesAcctObjSftyDiscCrcy` |  | |  | `sfty_amt_curr` | `CUKY(5)` | Currency of the Safety discount amount |
| `SecuritiesAcctObjValnFrqcy` |  | |  | `unit_valn_freq` | `CHAR(2)` | Indicator : Valuation Frequency of Securities Account |
| `SecuritiesAcctObjValnPerd` |  | |  | `period_valn_freq` | `NUMC(4)` | Period of revaluation for securities |
| `SecuritiesAcctObjRevalStrtDte` |  | |  | `start_date` | `DATS(8)` | Valuation Start date |
| `SecuritiesAcctObjRevalEndDte` |  | |  | `end_date` | `DATS(8)` | Valuation End date |
| `SecuritiesAcctObjLendgRateSign` |  | |  | `lending_rate_ind` | `CHAR(2)` | Indicates that the asset has a default lending rate or not |
| `SecuritiesAcctObj1stLendgRate` |  | |  | `lending_rate1` | `DEC(10)` | Lending rate 1 |
| `SecuritiesAcctObjLqdtnType` |  | |  | `liqd_typ` | `CHAR(6)` | Liquidation type |
| `SecuritiesAcctObjLqdtnRsn` |  | |  | `liqd_reason` | `CHAR(6)` | Liquidation Reason |
| `SecuritiesAcctObjLqdtnDate` |  | |  | `liqd_date` | `DATS(8)` | Date of Liquidation of Collateral |
| `SecuritiesAcctObjLqdtnAmt` |  | |  | `liqd_amt` | `CURR(17)` | Proceeds obtained from liquidation of the collateral |
| `SecuritiesAcctObjLqdtnCrcy` |  | |  | `liqd_curr` | `CUKY(5)` | Currency of Liquidation value |
| `SecuritiesAccountObjOrgUnit1` |  | |  | `org_unit1` | `CHAR(10)` | Organizational Unit 1: Assets |
| `SecuritiesAccountObjOrgUnit2` |  | |  | `org_unit2` | `CHAR(10)` | Organizational Unit 2: Assets |
| `SecuritiesAccountObjOrgUnit3` |  | |  | `org_unit3` | `CHAR(10)` | Organizational Unit 3: Assets |
| `SecuritiesAccountObjOrgUnit4` |  | |  | `org_unit4` | `CHAR(10)` | Organizational Unit 4: Assets |
| `SecuritiesAccountObjOrgUnit5` |  | |  | `org_unit5` | `CHAR(10)` | Organizational Unit 5: Assets |
| `SecuritiesAcctObjEnteredBy` |  | |  | `created_by` | `CHAR(12)` | Securities Add-On User |
| `SecuritiesAcctObjEnteredDte` |  | |  | `created_date` | `DATS(8)` | Created On |
| `SecuritiesAcctObjEnteredTme` |  | |  | `created_time` | `TIMS(6)` | Created At |
| `SecuritiesAcctObjLastChgdBy` |  | |  | `last_chg_by` | `CHAR(12)` | Last Changed By |
| `SecuritiesAcctObjLastChgdDte` |  | |  | `last_chg_date` | `DATS(8)` | Last Changed on |
| `SecuritiesAcctObjLastChgdTme` |  | |  | `last_chg_time` | `TIMS(6)` | Last Changed  At |
| `CollateralProcessControlKey` |  | |  |  | `CHAR(10)` | Process Control Key |
| `_SecuritiesAccountPosition` | | ✓ | | | | |
| `_SecuritiesAcctObjMstrData` | | ✓ | | | | |
| `_SecuritiesAcctPosMstrData` | | ✓ | | | | |
| `_SecuritiesAccountPartner` | | ✓ | | | | |
| `_ObjectAssetData` | | ✓ | | | | |
| `_CollateralAdminOrgUnitAttrib` | | ✓ | | | | |
| `_SecuritiesAcctObjLqdtnType` | | ✓ | | | | |
| `_SecuritiesAcctObjSftyDiscSign` | | ✓ | | | | |
| `_SecuritiesAcctObjValnFrqcy` | | ✓ | | | | |
| `_SecuritiesAccountObjValCrcy` | | ✓ | | | | |
| `_SecuritiesAcctObjSftyDiscCrcy` | | ✓ | | | | |
| `_SecuritiesAcctObjLqdtnCrcy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SecuritiesAccountPosition` | `I_SecuritiesAccountPosition` | [0..*] |
| `_SecuritiesAcctObjMstrData` | `I_SecuritiesAcctObjMstrData` | [0..1] |
| `_SecuritiesAcctPosMstrData` | `I_SecuritiesAcctPosMstrData` | [0..*] |
| `_SecuritiesAccountPartner` | `I_SecuritiesAccountPartner` | [0..*] |
| `_ObjectAssetData` | `I_ObjectAssetData` | [0..*] |
| `_CollateralAdminOrgUnitAttrib` | `I_CollateralAdminOrgUnitAttrib` | [0..1] |
| `_SecuritiesAcctObjLqdtnType` | `I_ObjectAssetLiquidationType` | [0..1] |
| `_SecuritiesAcctObjSftyDiscSign` | `I_CollateralSafetyDiscountSign` | [0..1] |
| `_SecuritiesAcctObjValnFrqcy` | `I_ObjectAssetValuationFrqcy` | [0..1] |
| `_SecuritiesAccountObjValCrcy` | `I_Currency` | [0..1] |
| `_SecuritiesAcctObjSftyDiscCrcy` | `I_Currency` | [0..1] |
| `_SecuritiesAcctObjLqdtnCrcy` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITIESACCOUNTOBJECTDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITIESACCOUNTOBJECTDATA')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ISECACCOBJDATA',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData:{
        blocking: #BLOCKED_DATA_EXCLUDED
    }
}
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'L',
        dataClass: 'MASTER'
    },
    supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'SecuritiesAccountObjectUUID'
}
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
    delta.changeDataCapture: {
        mapping: [ {
           table : 'CMS_SEC_ACC',
           role : #MAIN,
           viewElement : ['SecuritiesAccountObjectUUID'],
           tableElement : ['SEC_ACC_GUID']
        } ]
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Securities Account Object Details'
define view I_SecuritiesAccountObjectData
  as select from P_SecuritiesAccountObject_TF(P_SAPClient: $session.client) as SecuritiesAccountObject
    cross join   I_SecuritiesAccountAssetType
  association [0..*] to I_SecuritiesAccountPosition    as _SecuritiesAccountPosition     on $projection.SecuritiesAccountObjectUUID = _SecuritiesAccountPosition.SecuritiesAccountObjectUUID
  association [0..1] to I_SecuritiesAcctObjMstrData    as _SecuritiesAcctObjMstrData     on $projection.SecuritiesAccountObjectUUID = _SecuritiesAcctObjMstrData.SecuritiesAccountObjectUUID
  association [0..*] to I_SecuritiesAcctPosMstrData    as _SecuritiesAcctPosMstrData     on $projection.SecuritiesAccountObjectUUID = _SecuritiesAcctPosMstrData.SecuritiesAccountObjectUUID
  association [0..*] to I_SecuritiesAccountPartner     as _SecuritiesAccountPartner      on $projection.SecuritiesAccountObjectUUID = _SecuritiesAccountPartner.SecuritiesAccountObjectUUID
  association [0..*] to I_ObjectAssetData              as _ObjectAssetData               on $projection.SecuritiesAcctObjInternalID = _ObjectAssetData.ObjectAssetReferenceNumber
  association [0..1] to I_CollateralAdminOrgUnitAttrib as _CollateralAdminOrgUnitAttrib  on $projection.CollateralAdminOrgUnit = _CollateralAdminOrgUnitAttrib.CollateralAdminOrgUnit
  association [0..1] to I_ObjectAssetLiquidationType   as _SecuritiesAcctObjLqdtnType    on $projection.SecuritiesAcctObjLqdtnType = _SecuritiesAcctObjLqdtnType.ObjectAssetLiquidationType
  association [0..1] to I_CollateralSafetyDiscountSign as _SecuritiesAcctObjSftyDiscSign on $projection.SecuritiesAcctObjSftyDiscSign = _SecuritiesAcctObjSftyDiscSign.CollateralSafetyDiscountSign
  association [0..1] to I_ObjectAssetValuationFrqcy    as _SecuritiesAcctObjValnFrqcy    on $projection.SecuritiesAcctObjValnFrqcy = _SecuritiesAcctObjValnFrqcy.ObjectAssetValuationFrequency
  association [0..1] to I_Currency                     as _SecuritiesAccountObjValCrcy   on $projection.SecuritiesAccountObjValCrcy = _SecuritiesAccountObjValCrcy.Currency
  association [0..1] to I_Currency                     as _SecuritiesAcctObjSftyDiscCrcy on $projection.SecuritiesAcctObjSftyDiscCrcy = _SecuritiesAcctObjSftyDiscCrcy.Currency
  association [0..1] to I_Currency                     as _SecuritiesAcctObjLqdtnCrcy    on $projection.SecuritiesAcctObjLqdtnCrcy = _SecuritiesAcctObjLqdtnCrcy.Currency

{
  key SecuritiesAccountObject.sec_acc_guid                     as SecuritiesAccountObjectUUID,
      SecuritiesAccountObject.sec_acc_guid_conv                as SecuritiesAcctObjInternalID,
      SecuritiesAccountObject.depo_bank_id                     as SecuritiesAcctObjDepositoryBk,
      SecuritiesAccountObject.account_number                   as SecuritiesAccountObjectNumber,
      SecuritiesAccountObject.sec_acc_desc                     as SecuritiesAccountObjDesc,
      SecuritiesAccountObject.acc_old_ref_no                   as SecuritiesAcctObjExtRefNmbr,
      @Semantics.amount.currencyCode: 'SecuritiesAccountObjValCrcy'
      SecuritiesAccountObject.sec_acc_val                      as SecuritiesAccountObjValAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_SecuritiesAccountObjValCrcy'
      SecuritiesAccountObject.sec_acc_val_curr                 as SecuritiesAccountObjValCrcy,
      SecuritiesAccountObject.val_date                         as SecuritiesAccountObjValnDte,
      SecuritiesAccountObject.admin_org_unit                   as CollateralAdminOrgUnit,
      SecuritiesAccountObject.bankarea                         as CollateralBankArea,
      SecuritiesAccountObject.risk_code                        as SecuritiesAccountObjRiskCode,
      @ObjectModel.foreignKey.association: '_SecuritiesAcctObjSftyDiscSign'
      SecuritiesAccountObject.sfty_ind                         as SecuritiesAcctObjSftyDiscSign,
      SecuritiesAccountObject.sfty_dscnt                       as SecuritiesAcctObjSftyDiscPct,
      @Semantics.amount.currencyCode: 'SecuritiesAcctObjSftyDiscCrcy'
      SecuritiesAccountObject.sfty_amount                      as SecuritiesAcctObjSftyDiscAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_SecuritiesAcctObjSftyDiscCrcy'
      SecuritiesAccountObject.sfty_amt_curr                    as SecuritiesAcctObjSftyDiscCrcy,
      @ObjectModel.foreignKey.association: '_SecuritiesAcctObjValnFrqcy'
      SecuritiesAccountObject.unit_valn_freq                   as SecuritiesAcctObjValnFrqcy,
      SecuritiesAccountObject.period_valn_freq                 as SecuritiesAcctObjValnPerd,
      SecuritiesAccountObject.start_date                       as SecuritiesAcctObjRevalStrtDte,
      SecuritiesAccountObject.end_date                         as SecuritiesAcctObjRevalEndDte,
      SecuritiesAccountObject.lending_rate_ind                 as SecuritiesAcctObjLendgRateSign,
      SecuritiesAccountObject.lending_rate1                    as SecuritiesAcctObj1stLendgRate,
      @ObjectModel.foreignKey.association: '_SecuritiesAcctObjLqdtnType'
      SecuritiesAccountObject.liqd_typ                         as SecuritiesAcctObjLqdtnType,
      SecuritiesAccountObject.liqd_reason                      as SecuritiesAcctObjLqdtnRsn,
      SecuritiesAccountObject.liqd_date                        as SecuritiesAcctObjLqdtnDate,
      @Semantics.amount.currencyCode: 'SecuritiesAcctObjLqdtnCrcy'
      SecuritiesAccountObject.liqd_amt                         as SecuritiesAcctObjLqdtnAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_SecuritiesAcctObjLqdtnCrcy'
      SecuritiesAccountObject.liqd_curr                        as SecuritiesAcctObjLqdtnCrcy,
      SecuritiesAccountObject.org_unit1                        as SecuritiesAccountObjOrgUnit1,
      SecuritiesAccountObject.org_unit2                        as SecuritiesAccountObjOrgUnit2,
      SecuritiesAccountObject.org_unit3                        as SecuritiesAccountObjOrgUnit3,
      SecuritiesAccountObject.org_unit4                        as SecuritiesAccountObjOrgUnit4,
      SecuritiesAccountObject.org_unit5                        as SecuritiesAccountObjOrgUnit5,
      SecuritiesAccountObject.created_by                       as SecuritiesAcctObjEnteredBy,
      SecuritiesAccountObject.created_date                     as SecuritiesAcctObjEnteredDte,
      SecuritiesAccountObject.created_time                     as SecuritiesAcctObjEnteredTme,
      SecuritiesAccountObject.last_chg_by                      as SecuritiesAcctObjLastChgdBy,
      SecuritiesAccountObject.last_chg_date                    as SecuritiesAcctObjLastChgdDte,
      SecuritiesAccountObject.last_chg_time                    as SecuritiesAcctObjLastChgdTme,
      I_SecuritiesAccountAssetType.CollateralProcessControlKey as CollateralProcessControlKey,

      _SecuritiesAccountPosition,
      _SecuritiesAcctObjMstrData,
      _SecuritiesAcctPosMstrData,
      _SecuritiesAccountPartner,
      _ObjectAssetData,
      _CollateralAdminOrgUnitAttrib,
      _SecuritiesAcctObjLqdtnType,
      _SecuritiesAcctObjSftyDiscSign,
      _SecuritiesAcctObjValnFrqcy,
      _SecuritiesAccountObjValCrcy,
      _SecuritiesAcctObjSftyDiscCrcy,
      _SecuritiesAcctObjLqdtnCrcy
}
```
