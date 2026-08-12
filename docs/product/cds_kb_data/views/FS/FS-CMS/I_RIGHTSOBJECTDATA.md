---
name: I_RIGHTSOBJECTDATA
description: "Rights Object Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RIGHTSOBJECTDATA')/$value
semantic_en: "Rights Object Details"
semantic_vi: "Rights Object Details — CDS view giao diện dựa trên P_RightsObject_TF."
keywords:
  - "rights"
  - "object"
  - "details"
  - "internal"
  - "category"
  - "type"
tags:
  - FS
  - bo:salesorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_RIGHTSOBJECTDATA

**Rights Object Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RIGHTSOBJECTDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RightsObjectUUID` | ✓ | |  | `rig_guid` | `RAW(16)` | Rights GUID |
| `RightsObjectInternalID` |  | |  | `rig_guid_conv` | `CHAR(40)` | Reference ID for the object |
| `RightsObjectCategory` |  | |  | `rig_category` | `CHAR(6)` | Object Category |
| `RightsObjectType` |  | |  | `rig_typ` | `CHAR(6)` | Right Type |
| `RightsObjectID` |  | |  | `rig_id` | `CHAR(40)` | Rights ID |
| `RightsObjectDescription` |  | |  | `add_descr` | `CHAR(30)` | Additional description of the right |
| `RightsObjectValidityStartDate` |  | |  | `duration_begin` | `DATS(8)` | Start date of the right |
| `RightsObjectValidityEndDate` |  | |  | `duration_end` | `DATS(8)` | Validity End Date of the Right or Patent |
| `RightsObjectClassification` |  | |  | `classification` | `CHAR(6)` | Classification |
| `RightsObjectNotarizationDate` |  | |  | `notar_date` | `DATS(8)` | Notarization Date |
| `RightsObjectRegistrationDate` |  | |  | `regis_date` | `DATS(8)` | Date of Patent Registration |
| `RightsObjectPatentNumber` |  | |  | `patent_no` | `CHAR(40)` | Patent Number |
| `RightsObjPatentRegistryNumber` |  | |  | `registry_no` | `CHAR(20)` | No. of the Register in the Patent Office |
| `RightsObjectPatentOffice` |  | |  | `patent_office` | `CHAR(30)` | Patent Office |
| `RightsObjectAdditionalProperty` |  | |  | `add_ppty_rig` | `CHAR(6)` | Additional Property Rights that are Available |
| `RightsObjectPatentParentUUID` |  | |  | `pat_parent_guid` | `RAW(16)` | Links to Parent Patent - GUID of the Parent |
| `ClaimsObjectDueDate` |  | |  | `due_date` | `DATS(8)` | Due date of a claim |
| `ClaimsObjectCompositionDesc` |  | |  | `composition` | `CHAR(30)` | Composition of the claim |
| `ClaimsObjectSavingsSumPercent` |  | |  | `sav_sum` | `DEC(10)` | Savings sum in Percentage (In building savings contracts) |
| `ClaimsObjectDoubtfulDebtAmount` |  | |  | `provbaddebt_amt` | `CURR(17)` | Provision doubtful debt amount |
| `ClaimsObjectDoubtfulDebtCrcy` |  | |  | `provbaddebt_curr` | `CUKY(5)` | Currency of Provision of doubfull debt |
| `ClaimsObjectAddressID` |  | |  | `addr_id` | `CHAR(10)` |  Address of the object (for build.sav.contr./rental claim) |
| `ClaimsObjectAccountNumber` |  | |  | `acc_number` | `CHAR(35)` | Account number |
| `ClaimsObjectBankCountryKey` |  | |  | `bank_country_key` | `CHAR(3)` | Key of Bank Country/Region |
| `ClaimsObjectBankKey` |  | |  | `bank_key` | `CHAR(15)` | Bank Key |
| `CollateralAdminOrgUnit` |  | |  | `admin_org_unit` | `CHAR(12)` | Administration Organizational Unit |
| `RightsObjectEnteredDateTime` |  | |  | `created_at` | `DEC(15)` | Creation Timestamp |
| `RightsObjLastChangedDateTime` |  | |  | `changed_at` | `DEC(15)` | Change Timestamp |
| `_RightsObjectMasterData` | | ✓ | | | | |
| `_ObjectAssetData` | | ✓ | | | | |
| `_RightsObjectPartner` | | ✓ | | | | |
| `_RightsObjectDocument` | | ✓ | | | | |
| `_ObjectValuationLinkData` | | ✓ | | | | |
| `_ObjectInsuranceLinkData` | | ✓ | | | | |
| `_LiquidationData` | | ✓ | | | | |
| `_RightsObjectCategory` | | ✓ | | | | |
| `_RightsObjectType` | | ✓ | | | | |
| `_CollateralAdminOrgUnitAttrib` | | ✓ | | | | |
| `_RightsObjectClassification` | | ✓ | | | | |
| `_RightsObjAdditionalProperty` | | ✓ | | | | |
| `_ClaimsObjectBankCountryKey` | | ✓ | | | | |
| `_ClaimsObjectDoubtfulDebtCrcy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RightsObjectMasterData` | `I_RightsObjectMasterData` | [0..1] |
| `_ObjectAssetData` | `I_ObjectAssetData` | [0..*] |
| `_RightsObjectPartner` | `I_ObjectAssetPartner` | [0..*] |
| `_RightsObjectDocument` | `I_ObjectAssetDocument` | [0..*] |
| `_ObjectValuationLinkData` | `I_ObjectValuationLinkData` | [0..*] |
| `_ObjectInsuranceLinkData` | `I_ObjectInsuranceLinkData` | [0..*] |
| `_LiquidationData` | `I_LiquidationData` | [0..*] |
| `_RightsObjectCategory` | `I_CollateralObjectCategory` | [0..1] |
| `_RightsObjectType` | `I_RightsObjectType` | [0..1] |
| `_CollateralAdminOrgUnitAttrib` | `I_CollateralAdminOrgUnitAttrib` | [0..1] |
| `_RightsObjectClassification` | `I_CollateralObjClassification` | [0..1] |
| `_RightsObjAdditionalProperty` | `I_CollateralAttributeIndType` | [0..1] |
| `_ClaimsObjectBankCountryKey` | `I_Country` | [0..1] |
| `_ClaimsObjectDoubtfulDebtCrcy` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RIGHTSOBJECTDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RIGHTSOBJECTDATA')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'IRIGOBJDATA',
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
    representativeKey: 'RightsObjectUUID'
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
           table : 'CMS_RIG',
           role : #MAIN,
           viewElement : ['RightsObjectUUID'],
           tableElement : ['RIG_GUID']
        } ]
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Rights Object Details'
define view I_RightsObjectData
  as select from P_RightsObject_TF(P_SAPClient:$session.client)
  association [0..1] to I_RightsObjectMasterData       as _RightsObjectMasterData       on  $projection.RightsObjectUUID = _RightsObjectMasterData.RightsObjectUUID
  association [0..*] to I_ObjectAssetData              as _ObjectAssetData              on  $projection.RightsObjectInternalID = _ObjectAssetData.ObjectAssetReferenceNumber
  association [0..*] to I_ObjectAssetPartner           as _RightsObjectPartner          on  $projection.RightsObjectUUID = _RightsObjectPartner.ObjectAssetUUID
  association [0..*] to I_ObjectAssetDocument          as _RightsObjectDocument         on  $projection.RightsObjectUUID = _RightsObjectDocument.ObjectAssetUUID
  association [0..*] to I_ObjectValuationLinkData      as _ObjectValuationLinkData      on  $projection.RightsObjectUUID = _ObjectValuationLinkData.ObjectValuationLinkUUID
  association [0..*] to I_ObjectInsuranceLinkData      as _ObjectInsuranceLinkData      on  $projection.RightsObjectUUID = _ObjectInsuranceLinkData.ObjectReferenceUUID
  association [0..*] to I_LiquidationData              as _LiquidationData              on  $projection.RightsObjectUUID = _LiquidationData.ObjectReferenceUUID
  association [0..1] to I_CollateralObjectCategory     as _RightsObjectCategory         on  $projection.RightsObjectCategory = _RightsObjectCategory.CollateralObjectCategory
  association [0..1] to I_RightsObjectType             as _RightsObjectType             on  $projection.RightsObjectCategory = _RightsObjectType.RightsObjectCategory
                                                                                        and $projection.RightsObjectType     = _RightsObjectType.RightsObjectType
  association [0..1] to I_CollateralAdminOrgUnitAttrib as _CollateralAdminOrgUnitAttrib on  $projection.CollateralAdminOrgUnit = _CollateralAdminOrgUnitAttrib.CollateralAdminOrgUnit
  association [0..1] to I_CollateralObjClassification  as _RightsObjectClassification   on  $projection.RightsObjectClassification = _RightsObjectClassification.CollateralObjClassification
                                                                                        and $projection.RightsObjectCategory       = _RightsObjectClassification.CollateralObjectCategory
  association [0..1] to I_CollateralAttributeIndType   as _RightsObjAdditionalProperty  on  $projection.RightsObjectAdditionalProperty             = _RightsObjAdditionalProperty.CollateralAttributeIndType
                                                                                        and _RightsObjAdditionalProperty.CollateralAttributeIndCat = 'RIG001'
  association [0..1] to I_Country                      as _ClaimsObjectBankCountryKey   on  $projection.ClaimsObjectBankCountryKey = _ClaimsObjectBankCountryKey.Country
  association [0..1] to I_Currency                     as _ClaimsObjectDoubtfulDebtCrcy on  $projection.ClaimsObjectDoubtfulDebtCrcy = _ClaimsObjectDoubtfulDebtCrcy.Currency
{
  key rig_guid         as RightsObjectUUID,
      rig_guid_conv    as RightsObjectInternalID,
      @ObjectModel.foreignKey.association: '_RightsObjectCategory'
      rig_category     as RightsObjectCategory,
      @ObjectModel.foreignKey.association: '_RightsObjectType'
      rig_typ          as RightsObjectType,
      rig_id           as RightsObjectID,
      add_descr        as RightsObjectDescription,
      duration_begin   as RightsObjectValidityStartDate,
      duration_end     as RightsObjectValidityEndDate,
      @ObjectModel.foreignKey.association: '_RightsObjectClassification'
      classification   as RightsObjectClassification,
      notar_date       as RightsObjectNotarizationDate,
      regis_date       as RightsObjectRegistrationDate,
      patent_no        as RightsObjectPatentNumber,
      registry_no      as RightsObjPatentRegistryNumber,
      patent_office    as RightsObjectPatentOffice,
      @ObjectModel.foreignKey.association: '_RightsObjAdditionalProperty'
      add_ppty_rig     as RightsObjectAdditionalProperty,
      pat_parent_guid  as RightsObjectPatentParentUUID,
      due_date         as ClaimsObjectDueDate,
      composition      as ClaimsObjectCompositionDesc,
      sav_sum          as ClaimsObjectSavingsSumPercent,
      @Semantics.amount.currencyCode: 'ClaimsObjectDoubtfulDebtCrcy'
      provbaddebt_amt  as ClaimsObjectDoubtfulDebtAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ClaimsObjectDoubtfulDebtCrcy'
      provbaddebt_curr as ClaimsObjectDoubtfulDebtCrcy,
      addr_id          as ClaimsObjectAddressID,
      acc_number       as ClaimsObjectAccountNumber,
      @ObjectModel.foreignKey.association: '_ClaimsObjectBankCountryKey'
      bank_country_key as ClaimsObjectBankCountryKey,
      bank_key         as ClaimsObjectBankKey,
      admin_org_unit   as CollateralAdminOrgUnit,
      created_at       as RightsObjectEnteredDateTime,
      changed_at       as RightsObjLastChangedDateTime,

      _RightsObjectMasterData,
      _ObjectAssetData,
      _RightsObjectPartner,
      _RightsObjectDocument,
      _ObjectValuationLinkData,
      _ObjectInsuranceLinkData,
      _LiquidationData,
      _RightsObjectCategory,
      _RightsObjectType,
      _CollateralAdminOrgUnitAttrib,
      _RightsObjectClassification,
      _RightsObjAdditionalProperty,
      _ClaimsObjectBankCountryKey,
      _ClaimsObjectDoubtfulDebtCrcy
}
```
