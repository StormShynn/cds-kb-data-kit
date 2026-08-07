---
name: I_CAINVCGDOCTECHDOCTYPE
description: "Cainvcgdoctechdoctype"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGDOCTECHDOCTYPE

**Cainvcgdoctechdoctype**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgTechnicalDocumentType` | ✓ | |  | `cast ( substring( dd07l.domvalue_l,1,1 ) as techdoctype_gfn_kk preserving type )` |  |  |
| `_CAInvcgDocTechDocTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgDocTechDocTypeText` | `I_CAInvcgDocTechDocTypeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Art des technischen Abr.-/Fakt.belegs'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CAInvcgTechnicalDocumentType',
  sapObjectNodeType.name: 'ContrAcctgInvcgTechDocType',
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC
define view entity I_CAInvcgDocTechDocType
  as select from dd07l

  association [1..*] to I_CAInvcgDocTechDocTypeText as _CAInvcgDocTechDocTypeText on $projection.CAInvcgTechnicalDocumentType = _CAInvcgDocTechDocTypeText.CAInvcgTechnicalDocumentType
{
      @ObjectModel.text.association: '_CAInvcgDocTechDocTypeText'
  key cast ( substring( dd07l.domvalue_l,1,1 )  as techdoctype_gfn_kk preserving type ) as CAInvcgTechnicalDocumentType,
      _CAInvcgDocTechDocTypeText
}
where
      domname  = 'TECHDOCTYPE_KK'
  and as4local = 'A'
```
