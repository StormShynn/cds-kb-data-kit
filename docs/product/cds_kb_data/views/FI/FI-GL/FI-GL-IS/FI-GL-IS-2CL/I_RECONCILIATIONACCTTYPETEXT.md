---
name: I_RECONCILIATIONACCTTYPETEXT
description: "Reconciliationaccttypetext"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - text-view
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_RECONCILIATIONACCTTYPETEXT

**Reconciliationaccttypetext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReconciliationAccountType` | ✓ | |  | `domvalue_l` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `ReconciliationAccountTypeName` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IRACCTTYPENAME'
@EndUserText.label: 'Reconciliation Account Type Description'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ReconciliationAccountType'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT]
define view I_Reconciliationaccttypetext
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

  key domvalue_l as ReconciliationAccountType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key ddlanguage as Language,
      @Semantics.text
      ddtext     as ReconciliationAccountTypeName,
      _Language
}
where
      domname  = 'MITKZ'
  and as4local = 'A'
```
