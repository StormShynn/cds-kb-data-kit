---
name: I_AVAILABILITYBYWRKAGRMTANDDTE
description: "This view provides the prerequisites for answering the following business questions: What is the total planned hours of a work agreement each day?"
app_component: CA-TS-S4
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AVAILABILITYBYWRKAGRMTANDDTE')/$value
semantic_en: "This view provides the prerequisites for answering the following business questions: What is the total planned hours of a work agreement each day?"
semantic_vi: "Availability by Work Agreement and Date — CDS view giao diện dựa trên P_Empworkinghours."
keywords:
  - "availability"
  - "work"
  - "agreement"
  - "and"
  - "date"
  - "person"
  - "calendar"
  - "hours"
tags:
  - CA
  - bo:plant
  - CA-TS
  - CA-TS-S4
  - component:CA-TS-S4
  - interface-view
  - lob:cross_application components
  - plan
---
# I_AVAILABILITYBYWRKAGRMTANDDTE

**This view provides the prerequisites for answering the following business questions: What is the total planned hours of a work agreement each day?**

| Property | Value |
|---|---|
| App Component | `CA-TS-S4` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AVAILABILITYBYWRKAGRMTANDDTE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PersonWorkAgreement` | ✓ | |  |  | `NUMC(8)` | Personnel Number |
| `CalendarDate` |  | |  |  | `DATS(8)` | Calendar Date |
| `AvailabilityInHours` |  | |  | `case when EmpTimeOverview.PersonWorkAgreement is not null then EmpTimeOverview.AvailabilityInHours else case when Difference >= 0 then EmployeeTime.TotalPlannedHours else case when EmployeeTime.Difference > -1 then EmployeeTime.TotalPlannedHours * abs(EmployeeTime.Difference) end end end` | `DEC(14)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AVAILABILITYBYWRKAGRMTANDDTE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AVAILABILITYBYWRKAGRMTANDDTE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEMPAVAILDATA'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@Analytics: { dataCategory: #FACT }
@ObjectModel.representativeKey: 'PersonWorkAgreement'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality : #C
@ObjectModel.usageType.sizeCategory : #XXL
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Availability by Work Agreement and Date'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_AvailabilityByWrkAgrmtAndDte 
    as select from    P_Empworkinghours      as EmployeeTime
      left outer join I_TimeOverviewByWrkAgrmtAndDte as EmpTimeOverview on  EmployeeTime.PersonWorkAgreement = EmpTimeOverview.PersonWorkAgreement
                                                                and EmployeeTime.CalendarDate         = EmpTimeOverview.CalendarDate


{
  key    EmployeeTime.PersonWorkAgreement,
         EmployeeTime.CalendarDate,
         case when EmpTimeOverview.PersonWorkAgreement is not null  //when data is there        
           then
           EmpTimeOverview.AvailabilityInHours      // Added in 2111   
         else
           case when Difference >= 0
           then
                 EmployeeTime.TotalPlannedHours
           else
             case when EmployeeTime.Difference > -1 //where the weekly hours is like 5.5
             then
               EmployeeTime.TotalPlannedHours * abs(EmployeeTime.Difference)
             end
         end
         end                                                                              as AvailabilityInHours

}
```
