---
name: I_MAINTENANCEORDERPROCESSPHASE
description: "This CDS view provides supported values for Maintenance Processing Phase. The values are as follows: Planning Completion Post Execution Execution Scheduling Preparation Approval This CDS view provides the data to answer the following business questions: What are the valid processing phases available for maintenance orders in the system? Which maintenance order processing phases can be selected when updating or filtering maintenance order status? What are the text descriptions for each maintenance order processing phase in different languages? Which processing phases have subordinate or related phase classifications? What phase values are actively maintained in the system for maintenance order lifecycle management (excluding preliminary phases 01 and 02)? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPROCESSPHASE')/$value
semantic_en: "This CDS view provides supported values for Maintenance Processing Phase. The values are as follows: Planning Completion Post Execution Execution Scheduling Preparation Approval This CDS view provides the data to answer the following business questions: What are the valid processing phases available for maintenance orders in the system? Which maintenance order processing phases can be selected when updating or filtering maintenance order status? What are the text descriptions for each maintenance order processing phase in different languages? Which processing phases have subordinate or related phase classifications? What phase values are actively maintained in the system for maintenance order lifecycle management (excluding preliminary phases 01 and 02)? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Maintenance Order Processing Phase — CDS view giao diện dựa trên dd07l."
keywords:
  - "maintenance"
  - "order"
  - "processing"
  - "phase"
  - "domain"
  - "value"
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MO-2CL
  - interface-view
  - lob:plant maintenance
  - order
  - plan
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
---
# I_MAINTENANCEORDERPROCESSPHASE

**This CDS view provides supported values for Maintenance Processing Phase. The values are as follows: Planning Completion Post Execution Execution Scheduling Preparation Approval This CDS view provides the data to answer the following business questions: What are the valid processing phases available for maintenance orders in the system? Which maintenance order processing phases can be selected when updating or filtering maintenance order status? What are the text descriptions for each maintenance order processing phase in different languages? Which processing phases have subordinate or related phase classifications? What phase values are actively maintained in the system for maintenance order lifecycle management (excluding preliminary phases 01 and 02)? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPROCESSPHASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceProcessingPhase` | ✓ | |  | `cast( dd07l.domvalue_l as pm_phase )` | `CHAR(1)` | Maintenance Processing Phase |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_MaintOrdProcSuborddPhase` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPROCESSPHASE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPROCESSPHASE')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Maintenance Order Processing Phase'
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
//@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Analytics.technicalName: 'IMAINTORDPROCESSPHASE'
@ObjectModel.representativeKey: 'MaintenanceProcessingPhase'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
//                                     #EXTRACTION_DATA_SOURCE,
//                                     #ANALYTICAL_DIMENSION, 
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE, 
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.compositionRoot: true
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define root view entity I_MaintenanceOrderProcessPhase as select from dd07l
  composition [0..*] of I_MaintOrderProcessPhaseText as _Text
  composition [0..*] of I_MaintOrdProcSuborddPhase as _MaintOrdProcSuborddPhase
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as pm_phase ) as MaintenanceProcessingPhase,
//      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD] 
      _MaintOrdProcSuborddPhase,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD] 
      _Text
} 
where dd07l.domname  = 'EAM_OSTAT_PHASE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
  and dd07l.domvalue_l > '02'
```
