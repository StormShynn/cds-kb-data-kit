---
name: I_NEARMISSGROUPCODE
description: "This CDS view enables you to retrieve near miss group codes used in the context of Environment, Health, and Safety (EHS) incident management. You can use this view to categorize and analyze near miss incidents by their group classification. This CDS view provides the data to answer the following business questions: Which near miss group codes are configured in the system? Which near miss group codes are currently active or inactive? How can I classify near miss incidents by group for reporting purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NEARMISSGROUPCODE')/$value
semantic_en: "This CDS view enables you to retrieve near miss group codes used in the context of Environment, Health, and Safety (EHS) incident management. You can use this view to categorize and analyze near miss incidents by their group classification. This CDS view provides the data to answer the following business questions: Which near miss group codes are configured in the system? Which near miss group codes are currently active or inactive? How can I classify near miss incidents by group for reporting purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Near Miss Group Code — CDS view giao diện dựa trên ehhssc_nm_grp."
keywords:
  - "near"
  - "miss"
  - "group"
  - "code"
  - "inactive"
  - "configuration"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
---
# I_NEARMISSGROUPCODE

**This CDS view enables you to retrieve near miss group codes used in the context of Environment, Health, and Safety (EHS) incident management. You can use this view to categorize and analyze near miss incidents by their group classification. This CDS view provides the data to answer the following business questions: Which near miss group codes are configured in the system? Which near miss group codes are currently active or inactive? How can I classify near miss incidents by group for reporting purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NEARMISSGROUPCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NearMissGroupCode` | ✓ | |  | `code` | `CHAR(21)` | Near Miss Group |
| `EHSInactiveConfiguration` |  | |  | `inactive` | `CHAR(1)` | Deactivate Configuration |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_NearMissGroupCodeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NEARMISSGROUPCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NEARMISSGROUPCODE')/$value)*

```abap
@EndUserText.label: 'Near Miss Group Code'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }

@VDM.viewType: #BASIC

@ObjectModel.representativeKey: 'NearMissGroupCode'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'IINCINCGRNM'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true 
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'EHSIncident'

define view I_NearMissGroupCode
  as select from ehhssc_nm_grp
  association [0..*] to I_NearMissGroupCodeText as _Text on $projection.NearMissGroupCode = _Text.NearMissGroupCode
{
      @ObjectModel.text.association: '_Text'
  key code            as NearMissGroupCode,
  
  inactive as EHSInactiveConfiguration,
  
      _Text
}
where inactive = ''
```
