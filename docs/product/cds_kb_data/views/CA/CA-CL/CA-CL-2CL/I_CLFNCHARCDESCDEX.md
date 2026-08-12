---
name: I_CLFNCHARCDESCDEX
description: "Clfncharcdescdex"
app_component: CA-CL-2CL
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
  - CA
  - CA-CL
  - interface-view
  - data-extraction
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCHARCDESCDEX

**Clfncharcdescdex**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
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
| `CharcInternalID` | ✓ | |  |  | `NUMC(10)` | Characteristic Internal ID |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Valid-to date |
| `TimeIntervalNumber` |  | |  |  | `NUMC(4)` | Internal Counter for Archiving Objects by ECM |
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `CharcDescription` |  | |  |  | `CHAR(30)` | Characteristic Description |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `_Language` | | ✓ | | | | |
| `_Characteristic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Characteristic` | `I_ClfnCharacteristicDEX` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataExtraction.alternativeKey: ['CharcInternalID','Language','TimeIntervalNumber']
@Analytics.dataExtraction.enabled: true
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true
@EndUserText.label: 'Description of Clfn Characteristic DEX'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'CharcInternalID'
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities:
  [  #LANGUAGE_DEPENDENT_TEXT,
     #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #EXTRACTION_DATA_SOURCE,
     #SQL_DATA_SOURCE                  ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_ClfnCharcDescDEX
  as select from I_ClfnCharcDesc as CharcDesc
  
      association [0..1] to I_Language as _Language 
        on $projection.Language = _Language.Language   
  
      /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
      association [1..1] to I_ClfnCharacteristicDEX as _Characteristic
        on  $projection.CharcInternalID    = _Characteristic.CharcInternalID
        and $projection.ValidityStartDate <= _Characteristic.ValidityEndDate
        and $projection.ValidityEndDate   >= _Characteristic.ValidityStartDate

{
  key CharcDesc.CharcInternalID,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key CharcDesc.Language,
      @Semantics.businessDate.to: true
  key CharcDesc.ValidityEndDate,
      CharcDesc.TimeIntervalNumber,
      CharcDesc.ChangeNumber,
      @Semantics.text: true
      CharcDesc.CharcDescription,
      @Semantics.businessDate.from: true
      CharcDesc.ValidityStartDate,           
      CharcDesc.IsDeleted,
      
      _Language,
      _Characteristic
}
```
