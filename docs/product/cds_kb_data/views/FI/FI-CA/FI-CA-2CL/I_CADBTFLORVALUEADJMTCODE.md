---
name: I_CADBTFLORVALUEADJMTCODE
description: "Cadbtflorvalueadjmtcode"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADBTFLORVALUEADJMTCODE

**Cadbtflorvalueadjmtcode**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CADoubtfulOrValueAdjmtCode` | ✓ | |  | `cast( left( dd07l.domvalue_l, 3 ) as infoz_kk )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CADbtflOrValueAdjmtCodeT` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Doubtful or Value Adjustment Code'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CADoubtfulOrValueAdjmtCode',
                sapObjectNodeType.name: 'ContrAcctgDbtflOrValAdjmtCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CADbtflOrValueAdjmtCode
  as select from dd07l

  association [1..*] to I_CADbtflOrValueAdjmtCodeT as _Text on $projection.CADoubtfulOrValueAdjmtCode = _Text.CADoubtfulOrValueAdjmtCode

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 3 ) as infoz_kk ) as CADoubtfulOrValueAdjmtCode,

      _Text
}
where
      domname  = 'INFOZ_KK'
  and as4local = 'A'
```
