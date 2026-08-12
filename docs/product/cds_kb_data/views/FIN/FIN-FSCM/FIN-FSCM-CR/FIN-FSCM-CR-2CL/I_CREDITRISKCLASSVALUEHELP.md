---
name: I_CREDITRISKCLASSVALUEHELP
description: "This CDS view is designed to provide a value help for credit risk classes, which are used to categorize the creditworthiness of customers or business partners. It serves as a dimension in analytical scenarios and can be used to extract data for reporting and analysis purposes. This CDS view provides the data to answer the following business questions: What are the available credit risk classes in the system? How can I retrieve the descriptive names of credit risk classes for reporting or analysis? How can I enable search functionality for credit risk classes with a high ranking and fuzziness threshold? How can I use credit risk classes as a dimension in analytical reports or dashboards? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITRISKCLASSVALUEHELP')/$value
semantic_en: "This CDS view is designed to provide a value help for credit risk classes, which are used to categorize the creditworthiness of customers or business partners. It serves as a dimension in analytical scenarios and can be used to extract data for reporting and analysis purposes. This CDS view provides the data to answer the following business questions: What are the available credit risk classes in the system? How can I retrieve the descriptive names of credit risk classes for reporting or analysis? How can I enable search functionality for credit risk classes with a high ranking and fuzziness threshold? How can I use credit risk classes as a dimension in analytical reports or dashboards? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Credit Risk Class — CDS view giao diện dựa trên I_CreditRiskClass."
keywords:
  - "credit"
  - "risk"
  - "class"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-CR-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
---
# I_CREDITRISKCLASSVALUEHELP

**This CDS view is designed to provide a value help for credit risk classes, which are used to categorize the creditworthiness of customers or business partners. It serves as a dimension in analytical scenarios and can be used to extract data for reporting and analysis purposes. This CDS view provides the data to answer the following business questions: What are the available credit risk classes in the system? How can I retrieve the descriptive names of credit risk classes for reporting or analysis? How can I enable search functionality for credit risk classes with a high ranking and fuzziness threshold? How can I use credit risk classes as a dimension in analytical reports or dashboards? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITRISKCLASSVALUEHELP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditRiskClass` | ✓ | |  |  | `CHAR(3)` | Risk Class |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITRISKCLASSVALUEHELP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITRISKCLASSVALUEHELP')/$value)*

```abap
@EndUserText.label: 'Credit Risk Class'

@AbapCatalog: {
    sqlViewName: 'ICRDTRISKCLASSVH',
    compiler.compareFilter: true
    }

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true

@VDM.viewType: #BASIC

@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true }

@ObjectModel:   {
    representativeKey: 'CreditRiskClass',
    resultSet.sizeCategory: #XS,
    usageType:  { dataClass: #CUSTOMIZING,
                  serviceQuality: #A,
                  sizeCategory: #S
                },
    dataCategory: #VALUE_HELP,
    modelingPattern: #VALUE_HELP_PROVIDER,
    supportedCapabilities: [ #VALUE_HELP_PROVIDER, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
    sapObjectNodeType.name: 'CreditRiskClass'
    }

@Search.searchable: true

define view I_CreditRiskClassValueHelp
  as select from I_CreditRiskClass
{
      @ObjectModel.text.element: ['CreditRiskClassName']
      @Search.defaultSearchElement: true
      @Search.ranking:#HIGH
      @Search.fuzzinessThreshold: 0.8
      @UI.textArrangement: #TEXT_LAST
  key CreditRiskClass,
      @Semantics.text: true
      _Text[1:Language = $session.system_language ].CreditRiskClassName
}
```
