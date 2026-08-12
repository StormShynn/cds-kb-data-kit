---
name: I_CLFNCHARCVALUEDESC
description: "Clfncharcvaluedesc"
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
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCHARCVALUEDESC

**Clfncharcvaluedesc**

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
| `CharcInternalID` | ✓ | |  | `cast ( CharacteristicValueDesc.atinn as atinn_no_conv preserving type )` | `NUMC(10)` | Characteristic Internal ID |
| `CharcValuePositionNumber` | ✓ | |  | `atzhl` | `NUMC(4)` | Int counter |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `TimeIntervalNumber` | ✓ | |  | `adzhl` | `NUMC(4)` | Internal Counter for Archiving Objects by ECM |
| `CharcValueDescription` |  | |  | `atwtb` | `CHAR(70)` | Characteristic value description |
| `ChangeNumber` |  | |  | `aennr` | `CHAR(12)` | Change Number |
| `ValidityStartDate` |  | |  | `datuv` | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  | `datub` | `DATS(8)` | Valid-to date |
| `IsDeleted` |  | |  | `lkenz` | `CHAR(1)` | Deletion Indicator |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'INGCCHR18'
@AccessControl.authorizationCheck: #NOT_ALLOWED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Clfn Characteristic Value Description'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:
  [  #LANGUAGE_DEPENDENT_TEXT,
     #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #SQL_DATA_SOURCE                  ]
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API     
@VDM.viewType: #BASIC     
define view I_ClfnCharcValueDesc  as select from cawnt as CharacteristicValueDesc
  
      association [0..1] to I_Language as _Language 
        on $projection.Language = _Language.Language
             
{
  key   cast ( CharacteristicValueDesc.atinn as atinn_no_conv preserving type ) as CharcInternalID,
        @ObjectModel.foreignKey.association: null
  key   CharacteristicValueDesc.atzhl as CharcValuePositionNumber,
        @ObjectModel.foreignKey.association: '_Language'
        @Semantics.language: true
  key   CharacteristicValueDesc.spras as Language,
        @ObjectModel.foreignKey.association: null
  key   CharacteristicValueDesc.adzhl as TimeIntervalNumber,
        @Semantics.text: true
        CharacteristicValueDesc.atwtb as CharcValueDescription,
//        CharacteristicValueDesc.techv as TechnicalStatusForm,
        CharacteristicValueDesc.aennr as ChangeNumber,
        @Semantics.businessDate.from: true
        CharacteristicValueDesc.datuv as ValidityStartDate,
        @Semantics.businessDate.to: true
        CharacteristicValueDesc.datub as ValidityEndDate,
        CharacteristicValueDesc.lkenz as IsDeleted,
        
        _Language
}
```
