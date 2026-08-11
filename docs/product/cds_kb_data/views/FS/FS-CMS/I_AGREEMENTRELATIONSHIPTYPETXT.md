---
name: I_AGREEMENTRELATIONSHIPTYPETXT
description: "Agreement Relationship Type - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRELATIONSHIPTYPETXT')/$value
semantic_en: "Agreement Relationship Type - Text"
semantic_vi: "Agreement Relationship Type - Text — CDS view giao diện dựa trên tcms_rel_typ_t."
keywords:
  - "agreement"
  - "relationship"
  - "type"
  - "text"
  - "language"
  - "relshp"
  - "srce"
  - "dest"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTRELATIONSHIPTYPETXT

**Agreement Relationship Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRELATIONSHIPTYPETXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementRelationshipType` | ✓ | |  | `rel_typ` | `CHAR(6)` | Relationship type |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `AgreementRelationshipTypeTxt` |  | |  | `name` | `CHAR(40)` | Relationship name in a specified language |
| `AgreementRelshpTypeSrceTxt` |  | |  | `src_name` | `CHAR(40)` | Relationship name from Source to destination |
| `AgreementRelshpTypeDestTxt` |  | |  | `dst_name` | `CHAR(40)` | Relationship name from  Destination to Source |
| `_Language` | | ✓ | | | | |
| `_AgreementRelationshipType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_AgreementRelationshipType` | `I_AgreementRelationshipType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRELATIONSHIPTYPETXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRELATIONSHIPTYPETXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICAGRELTYPETXT',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    dataCategory: #TEXT,
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'AgreementRelationshipType'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Relationship Type - Text'
define view I_AgreementRelationshipTypeTxt
  as select from tcms_rel_typ_t
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
  association [0..1] to I_AgreementRelationshipType as _AgreementRelationshipType on $projection.AgreementRelationshipType = _AgreementRelationshipType.AgreementRelationshipType
{
      @ObjectModel.foreignKey.association: '_AgreementRelationshipType'
  key rel_typ  as AgreementRelationshipType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language as Language,
      @Semantics.text: true
      name     as AgreementRelationshipTypeTxt,
      @Semantics.text: true
      src_name as AgreementRelshpTypeSrceTxt,
      @Semantics.text: true
      dst_name as AgreementRelshpTypeDestTxt,

      _Language,
      _AgreementRelationshipType
}
```
