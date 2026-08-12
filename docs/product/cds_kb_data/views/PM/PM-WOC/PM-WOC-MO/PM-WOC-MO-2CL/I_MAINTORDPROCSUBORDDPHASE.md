---
name: I_MAINTORDPROCSUBORDDPHASE
description: "This CDS view serves as a value help provider for maintenance order processing sub-phases. The values are as follows: Process Sub-phase Sub-phase Description 0005 Submitted (Request) 0010 Accepted (Request) 0015 Rejected (Request) 0020 Action Required (Request) 0025 Resubmitted (Request) 0030 Order Assigned (Request) 0035 In Planning (Order) 0040 Submitted for Approval (Order) 0045 Approved (Order) 0050 Rejected (Order) 0055 In Preparation (Order) 0060 Ready to Schedule (Order) 0065 Ready for Execution (Order) 0070 Main Work Started (Order) 0075 Main Work Completed (Order) 0080 Work Done (Order) 0085 Technically Complete (Order) 0090 Completed (Request) 0092 Work Not Performed (Order) 0095 Closed (Order) 0100 Deletion Flag (Request) 0105 Deletion Flag (Order) 0110 In Planning 0115 In Preparation 0120 Ready to Schedule 0125 Ready for Execution 0130 Work in Execution 0135 Work Paused 0140 Work Finished 0145 Technically Complete 0150 Closed This CDS view provides the data to answer the following business questions: What are the available sub-phases within each maintenance order processing phase for tracking detailed work progress? Which processing sub-phases are applicable for specific maintenance order entity types in the system? What is the hierarchical relationship between maintenance processing phases and their corresponding sub-phases? Which sub-phases are available for selection when updating the status of maintenance orders beyond the initial processing stages? What are the valid sub-phase codes and their descriptions that can be assigned to maintenance orders during different stages of work execution? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDPROCSUBORDDPHASE')/$value
semantic_en: "This CDS view serves as a value help provider for maintenance order processing sub-phases. The values are as follows: Process Sub-phase Sub-phase Description 0005 Submitted (Request) 0010 Accepted (Request) 0015 Rejected (Request) 0020 Action Required (Request) 0025 Resubmitted (Request) 0030 Order Assigned (Request) 0035 In Planning (Order) 0040 Submitted for Approval (Order) 0045 Approved (Order) 0050 Rejected (Order) 0055 In Preparation (Order) 0060 Ready to Schedule (Order) 0065 Ready for Execution (Order) 0070 Main Work Started (Order) 0075 Main Work Completed (Order) 0080 Work Done (Order) 0085 Technically Complete (Order) 0090 Completed (Request) 0092 Work Not Performed (Order) 0095 Closed (Order) 0100 Deletion Flag (Request) 0105 Deletion Flag (Order) 0110 In Planning 0115 In Preparation 0120 Ready to Schedule 0125 Ready for Execution 0130 Work in Execution 0135 Work Paused 0140 Work Finished 0145 Technically Complete 0150 Closed This CDS view provides the data to answer the following business questions: What are the available sub-phases within each maintenance order processing phase for tracking detailed work progress? Which processing sub-phases are applicable for specific maintenance order entity types in the system? What is the hierarchical relationship between maintenance processing phases and their corresponding sub-phases? Which sub-phases are available for selection when updating the status of maintenance orders beyond the initial processing stages? What are the valid sub-phase codes and their descriptions that can be assigned to maintenance orders during different stages of work execution? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Maintenance Order Processing Sub Phase — CDS view giao diện dựa trên eam_ostat_ph_sph."
keywords:
  - "maintenance"
  - "order"
  - "processing"
  - "sub"
  - "phase"
  - "maint"
  - "process"
  - "code"
  - "overall"
  - "status"
  - "entity"
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
# I_MAINTORDPROCSUBORDDPHASE

**This CDS view serves as a value help provider for maintenance order processing sub-phases. The values are as follows: Process Sub-phase Sub-phase Description 0005 Submitted (Request) 0010 Accepted (Request) 0015 Rejected (Request) 0020 Action Required (Request) 0025 Resubmitted (Request) 0030 Order Assigned (Request) 0035 In Planning (Order) 0040 Submitted for Approval (Order) 0045 Approved (Order) 0050 Rejected (Order) 0055 In Preparation (Order) 0060 Ready to Schedule (Order) 0065 Ready for Execution (Order) 0070 Main Work Started (Order) 0075 Main Work Completed (Order) 0080 Work Done (Order) 0085 Technically Complete (Order) 0090 Completed (Request) 0092 Work Not Performed (Order) 0095 Closed (Order) 0100 Deletion Flag (Request) 0105 Deletion Flag (Order) 0110 In Planning 0115 In Preparation 0120 Ready to Schedule 0125 Ready for Execution 0130 Work in Execution 0135 Work Paused 0140 Work Finished 0145 Technically Complete 0150 Closed This CDS view provides the data to answer the following business questions: What are the available sub-phases within each maintenance order processing phase for tracking detailed work progress? Which processing sub-phases are applicable for specific maintenance order entity types in the system? What is the hierarchical relationship between maintenance processing phases and their corresponding sub-phases? Which sub-phases are available for selection when updating the status of maintenance orders beyond the initial processing stages? What are the valid sub-phase codes and their descriptions that can be assigned to maintenance orders during different stages of work execution? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDPROCSUBORDDPHASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceProcessingPhase` | ✓ | |  | `cast( eamovrlprocphase as pm_phase )` | `CHAR(1)` | Maintenance Processing Phase |
| `MaintOrdProcessSubPhaseCode` | ✓ | |  | `eamovrlprocsubphase` | `CHAR(4)` | Process Subphase |
| `EAMOverallStatusEntity` | ✓ | |  | `entity_type` | `CHAR(3)` | Entity Type |
| `_MaintenanceProcessingPhase` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDPROCSUBORDDPHASE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDPROCSUBORDDPHASE')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@EndUserText.label: 'Maintenance Order Processing Sub Phase'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S

@VDM.viewType: #BASIC

@AccessControl.authorizationCheck: #NOT_REQUIRED
@Consumption.ranked: true
@ObjectModel.dataCategory: #VALUE_HELP
//@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Analytics.technicalName: 'IMAINTORDPROCSUBORDDPHASE'
@ObjectModel.representativeKey: 'MaintenanceProcessingPhase'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
//                                     #EXTRACTION_DATA_SOURCE,
//                                     #ANALYTICAL_DIMENSION,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER]

//@ObjectModel.compositionRoot: true
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API





define view entity I_MaintOrdProcSuborddPhase
  as select from eam_ostat_ph_sph
  association to parent I_MaintenanceOrderProcessPhase as _MaintenanceProcessingPhase on $projection.MaintenanceProcessingPhase = _MaintenanceProcessingPhase.MaintenanceProcessingPhase

{
      //      @ObjectModel.text.association: '_Text'
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key cast( eamovrlprocphase as pm_phase ) as MaintenanceProcessingPhase,
  key eamovrlprocsubphase                  as MaintOrdProcessSubPhaseCode,
  key entity_type                          as EAMOverallStatusEntity,
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT]
      _MaintenanceProcessingPhase


}
where
  eamovrlprocphase > '02'
```
