---
name: I_MAINTENANCEORDERPHASE
description: "This CDS view provides supported values for Maintenance Processing Phase. The values are as follows: VALUE MEANING 0 Outstanding 2 Released 3 Technically Completed 4 Marked for Deletion 5 Historical order 6 Completed for Business This CDS view provides the data to answer the following business questions: What are the valid processing phases available for maintenance orders in the system? Which phase codes can be used to categorize and track maintenance order progress? What phase values are currently active and available for assignment to maintenance orders? How can maintenance orders be classified by their current processing stage? What are the standardized phase identifiers used across maintenance order analytics and reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPHASE')/$value
semantic_en: "This CDS view provides supported values for Maintenance Processing Phase. The values are as follows: VALUE MEANING 0 Outstanding 2 Released 3 Technically Completed 4 Marked for Deletion 5 Historical order 6 Completed for Business This CDS view provides the data to answer the following business questions: What are the valid processing phases available for maintenance orders in the system? Which phase codes can be used to categorize and track maintenance order progress? What phase values are currently active and available for assignment to maintenance orders? How can maintenance orders be classified by their current processing stage? What are the standardized phase identifiers used across maintenance order analytics and reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Maintenance Order Phase — CDS view giao diện dựa trên dd07l."
keywords:
  - "maintenance"
  - "order"
  - "phase"
  - "processing"
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MO-2CL
  - interface-view
  - lob:plant maintenance
  - order
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
---
# I_MAINTENANCEORDERPHASE

**This CDS view provides supported values for Maintenance Processing Phase. The values are as follows: VALUE MEANING 0 Outstanding 2 Released 3 Technically Completed 4 Marked for Deletion 5 Historical order 6 Completed for Business This CDS view provides the data to answer the following business questions: What are the valid processing phases available for maintenance orders in the system? Which phase codes can be used to categorize and track maintenance order progress? What phase values are currently active and available for assignment to maintenance orders? How can maintenance orders be classified by their current processing stage? What are the standardized phase identifiers used across maintenance order analytics and reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPHASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceProcessingPhase` | ✓ | |  | `cast(dd07l.domvalue_l as pm_phase)` | `CHAR(1)` | Maintenance Processing Phase |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MaintenanceOrderPhaseText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPHASE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPHASE')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics.technicalName: 'IMAINTORDPHASE'
@EndUserText.label: 'Maintenance Order Phase'
@ObjectModel.representativeKey: 'MaintenanceProcessingPhase'
@VDM.viewType: #BASIC

@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS

define view entity I_MaintenanceOrderPhase as

select from dd07l

association[0..*] to I_MaintenanceOrderPhaseText as _Text 
    on $projection.MaintenanceProcessingPhase = _Text.MaintenanceProcessingPhase
{
    @ObjectModel.text.association: '_Text'
    key cast(dd07l.domvalue_l as pm_phase) as MaintenanceProcessingPhase,
    
    // Associations 
    _Text
} where dd07l.domname = 'PM_PHASE'  
    and dd07l.as4local = 'A'
    and dd07l.domvalue_l <> '1';
```
