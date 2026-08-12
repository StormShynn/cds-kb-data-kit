---
name: I_NEARMISSGROUPCODETEXT
description: "This CDS view enables you to retrieve near miss group codes used in the context of Environment, Health, and Safety (EHS) incident management. You can use this view to categorize and analyze near miss incidents by their group classification. This CDS view provides the data to answer the following business questions: Which near miss group codes are configured in the system? Which near miss group codes are currently active or inactive? How can I classify near miss incidents by group for reporting purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NEARMISSGROUPCODETEXT')/$value
semantic_en: "This CDS view enables you to retrieve near miss group codes used in the context of Environment, Health, and Safety (EHS) incident management. You can use this view to categorize and analyze near miss incidents by their group classification. This CDS view provides the data to answer the following business questions: Which near miss group codes are configured in the system? Which near miss group codes are currently active or inactive? How can I classify near miss incidents by group for reporting purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Near Miss Group Code - Text — CDS view giao diện dựa trên ehhssc_nm_grp_t."
keywords:
  - "near"
  - "miss"
  - "group"
  - "code"
  - "text"
  - "language"
  - "name"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
---
# I_NEARMISSGROUPCODETEXT

**This CDS view enables you to retrieve near miss group codes used in the context of Environment, Health, and Safety (EHS) incident management. You can use this view to categorize and analyze near miss incidents by their group classification. This CDS view provides the data to answer the following business questions: Which near miss group codes are configured in the system? Which near miss group codes are currently active or inactive? How can I classify near miss incidents by group for reporting purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NEARMISSGROUPCODETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NearMissGroupCode` | ✓ | |  | `code` | `CHAR(21)` | Near Miss Group |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `NearMissGroupCodeName` |  | |  | `cast ( case when description_long is not initial then description_long else description end as ehfnd_description_l )` | `CHAR(132)` | Description (Long) |
| `_NearMissGroupCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_NearMissGroupCode` | `I_NearMissGroupCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NEARMISSGROUPCODETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NEARMISSGROUPCODETEXT')/$value)*

```abap
@EndUserText.label: 'Near Miss Group Code - Text'
@Analytics.dataExtraction.enabled: true

@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'NearMissGroupCode'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'IINCINCGRNMT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true

define view I_NearMissGroupCodeText
  as select from ehhssc_nm_grp_t
  association [0..1] to I_NearMissGroupCode as _NearMissGroupCode on $projection.NearMissGroupCode = _NearMissGroupCode.NearMissGroupCode
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_NearMissGroupCode'
  key code                                                  as NearMissGroupCode,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language                                              as Language,
      @Semantics.text:true
      cast ( case when description_long is not initial
              then description_long
              else description end as ehfnd_description_l ) as NearMissGroupCodeName,

      _NearMissGroupCode,
      _Language
}
```
