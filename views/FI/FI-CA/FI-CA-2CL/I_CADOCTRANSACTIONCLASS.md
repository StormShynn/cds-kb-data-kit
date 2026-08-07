---
name: I_CADOCTRANSACTIONCLASS
description: Cadoctransactionclass
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
# I_CADOCTRANSACTIONCLASS

**Cadoctransactionclass**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CADocumentTransactionClass` | ✓ | |  | `cast( left( dd07l.domvalue_l, 1 ) as tatyp_kk preserving type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CADocTransactionClassText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Document Transaction Class'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CADocumentTransactionClass',
                sapObjectNodeType.name: 'ContrAcctgDocTransactionClass',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CADocTransactionClass
  as select from dd07l

  association [1..*] to I_CADocTransactionClassText as _Text on $projection.CADocumentTransactionClass = _Text.CADocumentTransactionClass

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 1 ) as tatyp_kk preserving type ) as CADocumentTransactionClass,

      _Text
}
where
      domname  = 'TATYP_KK'
  and as4local = 'A'
```
