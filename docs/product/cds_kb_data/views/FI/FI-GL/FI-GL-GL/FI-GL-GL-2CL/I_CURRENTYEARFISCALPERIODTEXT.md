---
name: I_CURRENTYEARFISCALPERIODTEXT
description: "This CDS view provides a dimension for fiscal periods within a fiscal year variant, excluding special periods and independent of specific fiscal years. It serves as a reusable analytical dimension that represents the period structure (e.g., Period 1 through Period 12) for a given fiscal year variant without being tied to actual calendar years. The view filters out special periods and provides text associations for period descriptions. This CDS view provides the data to answer the following business questions: What are the standard fiscal periods defined for each fiscal year variant in the system? Which fiscal periods are available for reporting and analysis purposes, excluding special closing periods? What is the descriptive text for each fiscal period within a specific fiscal year variant? How many regular posting periods are configured for a given fiscal year variant? What is the period structure that can be used across multiple fiscal years for consistent period-based analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENTYEARFISCALPERIODTEXT')/$value
semantic_en: "This CDS view provides a dimension for fiscal periods within a fiscal year variant, excluding special periods and independent of specific fiscal years. It serves as a reusable analytical dimension that represents the period structure (e.g., Period 1 through Period 12) for a given fiscal year variant without being tied to actual calendar years. The view filters out special periods and provides text associations for period descriptions. This CDS view provides the data to answer the following business questions: What are the standard fiscal periods defined for each fiscal year variant in the system? Which fiscal periods are available for reporting and analysis purposes, excluding special closing periods? What is the descriptive text for each fiscal period within a specific fiscal year variant? How many regular posting periods are configured for a given fiscal year variant? What is the period structure that can be used across multiple fiscal years for consistent period-based analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Fiscal Period of Current Fiscal Year - Text — CDS view giao diện dựa trên I_FiscalPeriodText."
keywords:
  - "fiscal"
  - "period"
  - "current"
  - "year"
  - "text"
  - "language"
  - "variant"
  - "name"
tags:
  - FI
  - bo:companycode
  - component:FI-GL-GL-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-2CL
  - interface-view
  - lob:finance
---
# I_CURRENTYEARFISCALPERIODTEXT

**This CDS view provides a dimension for fiscal periods within a fiscal year variant, excluding special periods and independent of specific fiscal years. It serves as a reusable analytical dimension that represents the period structure (e.g., Period 1 through Period 12) for a given fiscal year variant without being tied to actual calendar years. The view filters out special periods and provides text associations for period descriptions. This CDS view provides the data to answer the following business questions: What are the standard fiscal periods defined for each fiscal year variant in the system? Which fiscal periods are available for reporting and analysis purposes, excluding special closing periods? What is the descriptive text for each fiscal period within a specific fiscal year variant? How many regular posting periods are configured for a given fiscal year variant? What is the period structure that can be used across multiple fiscal years for consistent period-based analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENTYEARFISCALPERIODTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `FiscalYearVariant` | ✓ | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` | ✓ | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalPeriodName` |  | |  |  | `CHAR(20)` | Period name long text |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENTYEARFISCALPERIODTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENTYEARFISCALPERIODTEXT')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Fiscal Period of Current Fiscal Year - Text'
@VDM.viewType: #BASIC

@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IFICFYFISCALPT' 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER

@ObjectModel.representativeKey: 'FiscalPeriod'
@AccessControl.authorizationCheck: #NOT_REQUIRED
//@Analytics: {dataExtraction.enabled: true}
@Search.searchable: true

@Analytics.internalName: #LOCAL

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]

define view entity I_CurrentYearFiscalPeriodText as select from I_FiscalPeriodText as I_FiscalPeriodText
                                             inner join  I_FiscalCalendarDate as I_FiscalCalendarDate on  I_FiscalPeriodText.FiscalYearVariant = I_FiscalCalendarDate.FiscalYearVariant
                                                                                                      and I_FiscalPeriodText.FiscalYear        = I_FiscalCalendarDate.FiscalYear


{
@Semantics.language: true
key I_FiscalPeriodText.Language,
@ObjectModel.foreignKey.association: '_FiscalYearVariant'      
key I_FiscalPeriodText.FiscalYearVariant,
key I_FiscalPeriodText.FiscalPeriod,

@Semantics.text: true
@Search.defaultSearchElement: true 
@Search.ranking: #HIGH
@Search.fuzzinessThreshold: 0.8
I_FiscalPeriodText.FiscalPeriodName,

I_FiscalPeriodText._FiscalYearVariant,
I_FiscalPeriodText._Language    
}

where I_FiscalCalendarDate.CalendarDate =  $session.system_date
```
