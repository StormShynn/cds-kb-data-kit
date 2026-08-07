---
name: I_CADOCUMENTSUPPLEMENT
description: Cadocumentsupplement
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
  - document
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADOCUMENTSUPPLEMENT

**Cadocumentsupplement**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CADocumentSupplements` | ✓ | |  | `cast( left( dd07l.domvalue_l, 1 ) as appdx_kk preserving type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CADocumentSupplementText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Document Supplement'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CADocumentSupplements',
                sapObjectNodeType.name: 'ContrAcctgDocumentSupplement',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CADocumentSupplement
  as select from dd07l

  association [0..*] to I_CADocumentSupplementText as _Text on $projection.CADocumentSupplements = _Text.CADocumentSupplements

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 1 ) as appdx_kk preserving type ) as CADocumentSupplements,

      _Text
}
where
      domname  = 'APPDX_KK'
  and as4local = 'A'
```
