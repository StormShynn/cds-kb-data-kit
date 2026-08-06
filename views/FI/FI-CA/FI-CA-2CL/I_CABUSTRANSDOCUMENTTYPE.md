---
name: I_CABUSTRANSDOCUMENTTYPE
description: Cabustransdocumenttype
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
# I_CABUSTRANSDOCUMENTTYPE

**Cabustransdocumenttype**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CABusTransDocumentType` | `cast ( left( dd07l.domvalue_l, 4 ) as evl_doctyp_kk preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CABusTransDocumentTypeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Business Transaction Document Type'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CABusTransDocumentType',
                sapObjectNodeType.name: 'ContrAcctgBusTransDocType',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CABusTransDocumentType
  as select from dd07l

  association [1..*] to I_CABusTransDocumentTypeText as _Text on $projection.CABusTransDocumentType = _Text.CABusTransDocumentType

{
      @ObjectModel.text.association: '_Text'
  key cast ( left( dd07l.domvalue_l, 4 ) as evl_doctyp_kk preserving type ) as CABusTransDocumentType,

      _Text
}
where
      domname  = 'EVL_DOCTYP_KK'
  and as4local = 'A'
```
