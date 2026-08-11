---
name: I_AGREEMENTRELATIONSHIPTYPE
description: "Agreement Relationship Type"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRELATIONSHIPTYPE')/$value
semantic_en: "Agreement Relationship Type"
semantic_vi: "Agreement Relationship Type — CDS view giao diện dựa trên tcms_rel_typ."
keywords:
  - "agreement"
  - "relationship"
  - "type"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTRELATIONSHIPTYPE

**Agreement Relationship Type**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRELATIONSHIPTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementRelationshipType` | ✓ | |  | `rel_typ` | `CHAR(6)` | Relationship type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AgreementRelationshipTypeTxt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRELATIONSHIPTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRELATIONSHIPTYPE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGRELTYPE',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'AgreementRelationshipType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Relationship Type'
define view I_AgreementRelationshipType
  as select from tcms_rel_typ
  association [0..*] to I_AgreementRelationshipTypeTxt as _Text on $projection.AgreementRelationshipType = _Text.AgreementRelationshipType
{
      @ObjectModel.text.association: '_Text'
  key rel_typ as AgreementRelationshipType,

      _Text
}
```
