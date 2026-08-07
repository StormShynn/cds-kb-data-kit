---
name: I_CASHPOOLMDDESC
description: "Cashpoolmddesc"
app_component: FIN-FSCM-CLM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - component:FIN-FSCM-CLM-2CL
  - lob:Other
---
# I_CASHPOOLMDDESC

**Cashpoolmddesc**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CashPoolName` | ✓ | |  | `pool_name` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `CashPoolDesc` |  | |  | `pool_desc` |  |  |
| `CashPoolRefTxt` |  | |  | `ref_text` |  |  |
| `LocalLastChangeDateTime` |  | |  | `local_last_changed_at` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICPLMDDESC'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Cash Pool Master Data Description'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.representativeKey: 'CashPoolName'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]  
define view I_CashPoolMDDesc
  as select from fclm_cpl_txt
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key pool_name    as CashPoolName,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu        as Language,
      @Semantics.text: true
      pool_desc    as CashPoolDesc,
      @Semantics.text: true
      ref_text     as CashPoolRefTxt,
      local_last_changed_at as  LocalLastChangeDateTime,
      _Language
}
```
