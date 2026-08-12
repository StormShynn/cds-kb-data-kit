---
name: I_EHSDATAPERIOD
description: "This CDS view retrieves the time interval (such as monthly or yearly) over which individual amounts of environmental data are collected. This CDS view provides the data to answer the following business questions: Over what time period is each data amount collected? How many different time durations can you specify for collecting individual data amounts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDATAPERIOD')/$value
semantic_en: "This CDS view retrieves the time interval (such as monthly or yearly) over which individual amounts of environmental data are collected. This CDS view provides the data to answer the following business questions: Over what time period is each data amount collected? How many different time durations can you specify for collecting individual data amounts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Data Period — CDS view giao diện dựa trên dd07l."
keywords:
  - "ehs"
  - "data"
  - "period"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - EHS-SUS
  - EHS-SUS-EM
  - interface-view
  - bo:salesorganization
---
# I_EHSDATAPERIOD

**This CDS view retrieves the time interval (such as monthly or yearly) over which individual amounts of environmental data are collected. This CDS view provides the data to answer the following business questions: Over what time period is each data amount collected? How many different time durations can you specify for collecting individual data amounts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDATAPERIOD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSDataPeriod` | ✓ | |  | `cast( dd07l.domvalue_l as ehenv_mdef_period_code_nc )` | `CHAR(3)` | Data Period of Data Collection Definition |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EHSDataPeriodText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDATAPERIOD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDATAPERIOD')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEHSDPERIOD'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'EHS Data Period'

@VDM.viewType: #BASIC
@Analytics:
{
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName:#LOCAL
}
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel : { supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ],
                 modelingPattern: #NONE,
                 sapObjectNodeType.name: 'EHSDataPeriod',
                 representativeKey: 'EHSDataPeriod',
                 usageType: { serviceQuality: #A,
                              sizeCategory: #S,
                              dataClass: #META } }

@Metadata.ignorePropagatedAnnotations:true
define view I_EHSDataPeriod
  as select from dd07l
  association [0..*] to I_EHSDataPeriodText as _Text on $projection.EHSDataPeriod = _Text.EHSDataPeriod
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as ehenv_mdef_period_code_nc ) as EHSDataPeriod,
      // association
      _Text

}
where
      dd07l.domname  = 'EHENV_MDEF_PERIOD_CODE'
  and dd07l.as4local = 'A'
```
