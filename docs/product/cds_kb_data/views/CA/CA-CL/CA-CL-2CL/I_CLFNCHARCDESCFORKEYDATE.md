---
name: I_CLFNCHARCDESCFORKEYDATE
description: "Clfncharcdescforkeydate"
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
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
# I_CLFNCHARCDESCFORKEYDATE

**Clfncharcdescforkeydate**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CharcInternalID` | ✓ | |  |  | `NUMC(10)` | Characteristic Internal ID |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `CharcDescription` |  | |  |  | `CHAR(30)` | Characteristic Description |
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-to date |
| `_Characteristic` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Characteristic` | `I_ClfnCharacteristicForKeyDate` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'INGCCHR12_2'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Description of Clfn Charc for Key Date'
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CharcInternalID'
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:
  [  #LANGUAGE_DEPENDENT_TEXT,
     #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #SQL_DATA_SOURCE                  ]
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */
define view I_ClfnCharcDescForKeyDate
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate : sydate
  as select from I_ClfnCharcDesc as CharcDesc

      association [1..1] to I_ClfnCharacteristicForKeyDate as _Characteristic
        on $projection.CharcInternalID     = _Characteristic.CharcInternalID   
{
  key CharcDesc.CharcInternalID,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key CharcDesc.Language,
      @Semantics.text: true
      CharcDesc.CharcDescription,
      CharcDesc.ChangeNumber,
      @Semantics.businessDate.from: true
      CharcDesc.ValidityStartDate,
      @Semantics.businessDate.to: true
      CharcDesc.ValidityEndDate,

      _Language,
      _Characteristic
}
where CharcDesc.ValidityStartDate   <= $parameters.P_KeyDate
and   CharcDesc.ValidityEndDate     >= $parameters.P_KeyDate
and   CharcDesc.IsDeleted = ''
```
