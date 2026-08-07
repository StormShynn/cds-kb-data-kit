---
name: I_CAFACTORINGRECEIVABLESTATUS
description: "Cafactoringreceivablestatus"
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
  - status
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAFACTORINGRECEIVABLESTATUS

**Cafactoringreceivablestatus**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CACurrentFactoringStatusOfRbl` | ✓ | |  | `cast( left( dd07l.domvalue_l, 1 ) as fasta_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAFactoringReceivableStatusT` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'ICADFACRCVBLSTS'
             
@EndUserText.label: 'Factoring Receivable Status'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CACurrentFactoringStatusOfRbl',
                sapObjectNodeType.name: 'ContrAcctgFactoringRblStatus',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }
                            
@VDM.viewType: #BASIC

define view entity I_CAFactoringReceivableStatus
  as select from dd07l

  association [1..*] to I_CAFactoringReceivableStatusT as _Text on $projection.CACurrentFactoringStatusOfRbl = _Text.CACurrentFactoringStatusOfRbl

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 1 ) as fasta_kk preserving type ) as CACurrentFactoringStatusOfRbl,

      _Text
}
where
      domname  = 'FASTA_KK'
  and as4local = 'A'
```
