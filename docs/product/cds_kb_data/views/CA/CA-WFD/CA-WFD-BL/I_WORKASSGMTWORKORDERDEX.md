---
name: I_WORKASSGMTWORKORDERDEX
description: "This CDS view is designed to provide detailed information about work assignments related to work orders, specifically focusing on contingent workers. It integrates data from various sources to offer a comprehensive view of the relationships between staffing company supplier and work assignment business partners. This CDS view provides the data to answer the following business questions: What are the details of work assignments associated with specific work orders? Which suppliers are involved in these work assignments? What are the validity periods for the relationships between business partners in these assignments? Who are the contingent workers involved in these work assignments? How can we track the external IDs associated with work assignments and workforce persons? What is the country code associated with each work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTWORKORDERDEX')/$value
semantic_en: "This CDS view is designed to provide detailed information about work assignments related to work orders, specifically focusing on contingent workers. It integrates data from various sources to offer a comprehensive view of the relationships between staffing company supplier and work assignment business partners. This CDS view provides the data to answer the following business questions: What are the details of work assignments associated with specific work orders? Which suppliers are involved in these work assignments? What are the validity periods for the relationships between business partners in these assignments? Who are the contingent workers involved in these work assignments? How can we track the external IDs associated with work assignments and workforce persons? What is the country code associated with each work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Assignment Work Order Details — CDS view giao diện dựa trên Assignment Work Order Details."
keywords:
  - "assignment"
  - "work"
  - "order"
  - "details"
  - "relationship"
  - "number"
  - "supplier"
  - "business"
  - "partner2"
  - "date"
  - "start"
tags:
  - CA
  - bo:companycode
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
  - order
  - supplier
  - bo:maintenanceorder
---
# I_WORKASSGMTWORKORDERDEX

**This CDS view is designed to provide detailed information about work assignments related to work orders, specifically focusing on contingent workers. It integrates data from various sources to offer a comprehensive view of the relationships between staffing company supplier and work assignment business partners. This CDS view provides the data to answer the following business questions: What are the details of work assignments associated with specific work orders? Which suppliers are involved in these work assignments? What are the validity periods for the relationships between business partners in these assignments? Who are the contingent workers involved in these work assignments? How can we track the external IDs associated with work assignments and workforce persons? What is the country code associated with each work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTWORKORDERDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RelationshipNumber` | ✓ | |  |  | `CHAR(12)` | BP Relationship Number |
| `Supplier` | ✓ | |  | `BusinessPartner1` | `CHAR(10)` | Business Partner Number |
| `BusinessPartner2` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `EndDate` | ✓ | |  | `ValidityEndDate` | `DATS(8)` | Validity Date (Valid To) |
| `StartDate` |  | |  | `ValidityStartDate` | `DATS(8)` | Validity Date (Valid From) |
| `WorkAssignment` |  | |  |  | `NUMC(8)` | Workforce Assignment ID |
| `WorkforcePersonExternalID` |  | |  |  | `CHAR(100)` | External Person ID |
| `WorkAssignmentExternalID` |  | |  |  | `CHAR(100)` | Workforce Assignment External ID |
| `Country2DigitISOCode` |  | |  |  | `CHAR(2)` | Workforce Country ISO Code |
| `IsBlocked` |  | |  |  | `CHAR(1)` | Blocked Indicator |
| `_WorkAssignment` | | ✓ | | | | |
| `_WorkforcePerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkAssignment` | `I_WorkAssignmentDEX_1` | [0..1] |
| `_WorkforcePerson` | `I_WorkforcePersonDEX_1` | [1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTWORKORDERDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTWORKORDERDEX')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Assignment Work Order Details'

@VDM.viewType: #COMPOSITE
@Analytics.dataExtraction: {
            enabled: true,
            delta.changeDataCapture:
              {
              mapping:[
               {
                table: 'BUT050',
                role:#MAIN,
                viewElement: [ 'RelationshipNumber', 'Supplier','BusinessPartner2','EndDate'],
                tableElement: [ 'relnr','partner1','partner2','date_to' ]
               },
               {
                table: 'WFD_D_KEYMAP',
                role: #LEFT_OUTER_TO_ONE_JOIN,
                viewElement: [ 'WorkAssignment'],
                tableElement: [ 'workforce_assgmt_id' ]
               }
              
              ]
                
              }
            
        }
  

@ObjectModel.supportedCapabilities:[ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name:'WorkOrderDetails'
@Metadata.ignorePropagatedAnnotations:true 



define view entity I_WorkAssgmtWorkOrderDEX   as select distinct from I_WorkAssignmentKeyMapping as Assignment
    inner join   I_WorkAssignmentBP         as AssignmentBP   on  AssignmentBP.WorkAssignment   = Assignment.WorkAssignment
                                                               and Assignment.IsContingentWorker = 'X'

    inner join   I_BPRelationship_2         as BPRelationship on BPRelationship.BusinessPartner2 = AssignmentBP.WorkAssignmentBusinessPartner
    
    

  association [0..1] to I_WorkAssignmentDEX_1  as _WorkAssignment  on  _WorkAssignment.WorkAssignmentExternalID = $projection.WorkAssignmentExternalID

  association [1]    to I_WorkforcePersonDEX_1 as _WorkforcePerson on  _WorkforcePerson.WorkforcePersonExternalID = $projection.WorkforcePersonExternalID

{
  key BPRelationship.RelationshipNumber ,
  
  key BPRelationship.BusinessPartner1 as Supplier,
  
  key BPRelationship.BusinessPartner2 ,
  
  key BPRelationship.ValidityEndDate as EndDate,

      BPRelationship.ValidityStartDate as StartDate,
      
      Assignment.WorkAssignment,
            
      AssignmentBP.WorkforcePersonExternalID,
      Assignment.WorkAssignmentExternalID,
      Assignment.Country2DigitISOCode,
      
      @Semantics.booleanIndicator: true
      @UI.hidden: true
      Assignment.IsBlocked,

      /* Associations */
      _WorkAssignment,
      _WorkforcePerson

}
where
  (
      BPRelationship.RelationshipCategory = 'HCM003'
    or(
      BPRelationship.RelationshipCategory = 'BUR025'
    )
  )

  and Assignment.IsContingentWorker       = 'X'
```
