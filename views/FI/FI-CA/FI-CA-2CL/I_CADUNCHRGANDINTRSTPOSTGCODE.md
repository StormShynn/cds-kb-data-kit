---
name: I_CADUNCHRGANDINTRSTPOSTGCODE
description: Cadunchrgandintrstpostgcode
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
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
# I_CADUNCHRGANDINTRSTPOSTGCODE

**Cadunchrgandintrstpostgcode**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CADunChrgAndIntrstPostgCode` | ✓ | |  | `cast( left( dd07l.domvalue_l, 1 ) as cpost_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CADunChrgAndIntrstPostgCodeT` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'ICADUNINTRPSTCD'

@EndUserText.label: 'Dunning Charge and Interest Posting Code'

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CADunChrgAndIntrstPostgCode',
                sapObjectNodeType.name: 'CADunChrgAndIntrstPostgCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@Metadata.ignorePropagatedAnnotations: true

@VDM.viewType: #BASIC

define view entity I_CADunChrgAndIntrstPostgCode
  as select from dd07l

  association [1..*] to I_CADunChrgAndIntrstPostgCodeT as _Text on $projection.CADunChrgAndIntrstPostgCode = _Text.CADunChrgAndIntrstPostgCode

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 1 ) as cpost_kk preserving type ) as CADunChrgAndIntrstPostgCode,

      _Text
}
where
      domname  = 'CPOST_KK'
  and as4local = 'A'
```
