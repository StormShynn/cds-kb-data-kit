---
name: I_EHSINVESTIGATIONSTATUS
description: "This CDS view provides you with the supported values for incident investigation status in Environment, Health, and Safety (EHS). You can use this view to understand and work with the different statuses that an investigation can have throughout its lifecycle. This CDS view provides the data to answer the following business questions: What is the current status of an investigation? How many investigations are currently in progress? Which investigations have been closed or canceled? The following investigation status values are available: Value Meaning 01 New 02 In Progress 03 Closed 04 Canceled To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINVESTIGATIONSTATUS')/$value
semantic_en: "This CDS view provides you with the supported values for incident investigation status in Environment, Health, and Safety (EHS). You can use this view to understand and work with the different statuses that an investigation can have throughout its lifecycle. This CDS view provides the data to answer the following business questions: What is the current status of an investigation? How many investigations are currently in progress? Which investigations have been closed or canceled? The following investigation status values are available: Value Meaning 01 New 02 In Progress 03 Closed 04 Canceled To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Investigation status — CDS view giao diện dựa trên dd07l."
keywords:
  - "investigation"
  - "status"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
---
# I_EHSINVESTIGATIONSTATUS

**This CDS view provides you with the supported values for incident investigation status in Environment, Health, and Safety (EHS). You can use this view to understand and work with the different statuses that an investigation can have throughout its lifecycle. This CDS view provides the data to answer the following business questions: What is the current status of an investigation? How many investigations are currently in progress? Which investigations have been closed or canceled? The following investigation status values are available: Value Meaning 01 New 02 In Progress 03 Closed 04 Canceled To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINVESTIGATIONSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSInvestigationStatus` | ✓ | |  | `cast(dd07l.domvalue_l as ehhss_inv_status)` | `CHAR(2)` | Investigation Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EHSInvestigationStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINVESTIGATIONSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINVESTIGATIONSTATUS')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Investigation status'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.representativeKey: 'EHSInvestigationStatus'
@VDM.viewType: #BASIC 
@Analytics.internalName:#LOCAL
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[#VALUE_HELP_PROVIDER , #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.dataCategory:#VALUE_HELP
@Analytics: { dataCategory:#DIMENSION }

define view entity I_EHSInvestigationStatus
  as select from dd07l
  association [0..*] to I_EHSInvestigationStatusText as _Text on $projection.EHSInvestigationStatus = _Text.EHSInvestigationStatus
{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as ehhss_inv_status) as EHSInvestigationStatus,

      _Text
}
where
      dd07l.domname  = 'EHHSS_INV_STATUS'
  and dd07l.as4local = 'A'
```
