---
name: I_WRKASSGMTSRVCCOSTLVLDEX
description: "You use this CDS view to retrieve the data related to the service cost level of a work assignment. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business question: What are the details related to the service cost level of the work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WRKASSGMTSRVCCOSTLVLDEX')/$value
semantic_en: "You use this CDS view to retrieve the data related to the service cost level of a work assignment. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business question: What are the details related to the service cost level of the work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Service Cost Level of Work Assignment — CDS view giao diện dựa trên wfd_d_srvcostlvl."
keywords:
  - "service"
  - "cost"
  - "level"
  - "work"
  - "assignment"
  - "start"
  - "date"
tags:
  - CA
  - bo:companycode
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
---
# I_WRKASSGMTSRVCCOSTLVLDEX

**You use this CDS view to retrieve the data related to the service cost level of a work assignment. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business question: What are the details related to the service cost level of the work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WRKASSGMTSRVCCOSTLVLDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkAssignment` | ✓ | |  | `workforce_assgmt_id` | `NUMC(8)` | Workforce Assignment ID |
| `WorkAssignmentStartDate` | ✓ | |  | `start_date` | `DATS(8)` | Start Date |
| `WorkAssignmentEndDate` |  | |  | `end_date` | `DATS(8)` | End Date |
| `ServiceCostLevel` |  | |  | `cost_level` | `NUMC(4)` | Service Cost Level |
| `_CostLevelText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CostLevelText` | `I_ServiceCostLevelText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WRKASSGMTSRVCCOSTLVLDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WRKASSGMTSRVCCOSTLVLDEX')/$value)*

```abap
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.viewType: #BASIC
@Analytics.dataExtraction: {
            enabled: true,
            delta.changeDataCapture:
    {

            mapping:[
               {
                    table: 'wfd_d_srvcostlvl', role: #MAIN,
                    viewElement: ['WorkAssignment','WorkAssignmentStartDate'],
                    tableElement: ['workforce_assgmt_id','start_date']
                },
                  {
                    table: 'wfd_d_assgmtdets', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['WorkAssignment','WorkAssignmentStartDate'],
                    tableElement: ['workforce_assgmt_id','start_date']
                }
            ]
        }
    }
@ObjectModel.supportedCapabilities:[ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.sapObjectNodeType.name:'WorkAssignmentDetails'

@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Service Cost Level of Work Assignment'

define view entity I_WrkAssgmtSrvcCostLvlDEX
  as select from wfd_d_srvcostlvl as costlevel
    inner join   wfd_d_assgmtdets as assgmtdets on  costlevel.workforce_assgmt_id =       assgmtdets.workforce_assgmt_id
                                                and costlevel.end_date            between assgmtdets.start_date and assgmtdets.end_date
  association [0..*] to I_ServiceCostLevelText as _CostLevelText on $projection.ServiceCostLevel = _CostLevelText.ServiceCostLevel

{
  key costlevel.workforce_assgmt_id as WorkAssignment,
  key costlevel.start_date          as WorkAssignmentStartDate,

      costlevel.end_date            as WorkAssignmentEndDate,
      costlevel.cost_level          as ServiceCostLevel,
      _CostLevelText
}
where
      costlevel.block_ind  = ''
  and assgmtdets.block_ind = ''
```
