---
name: I_EHSAMOUNTSOURCETYPE
description: "This CDS view retrieves the types of sources from which any amount of environmental data originates. Some source types are, for example, sampled data, collected data, calculated data, and so on. This CDS view provides the data to answer the following business questions: Where is the data in Environment Management collected from? How many possible ways are there to collect data? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSOURCETYPE')/$value
semantic_en: "This CDS view retrieves the types of sources from which any amount of environmental data originates. Some source types are, for example, sampled data, collected data, calculated data, and so on. This CDS view provides the data to answer the following business questions: Where is the data in Environment Management collected from? How many possible ways are there to collect data? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Amount Source Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "ehs"
  - "amount"
  - "source"
  - "type"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - bo:salesorder
---
# I_EHSAMOUNTSOURCETYPE

**This CDS view retrieves the types of sources from which any amount of environmental data originates. Some source types are, for example, sampled data, collected data, calculated data, and so on. This CDS view provides the data to answer the following business questions: Where is the data in Environment Management collected from? How many possible ways are there to collect data? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSOURCETYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSAmountSourceType` | ✓ | |  | `cast( dd07l.domvalue_l as abap.char(2) )` | `CHAR(2)` |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EHSAmountSourceTypeName` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSOURCETYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSOURCETYPE')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'IAMNSOURTYPE',
    compiler.compareFilter: true
}
@EndUserText.label: 'EHS Amount Source Type'
@VDM.viewType: #BASIC

@Analytics: { dataCategory:#DIMENSION,
              dataExtraction.enabled:true }

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: { supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ],
                modelingPattern: #NONE,
                representativeKey: 'EHSAmountSourceType',
                sapObjectNodeType.name: 'EHSAmountSourceType',
                usageType: { serviceQuality: #A,
                             sizeCategory: #S,
                             dataClass: #META } }

@Metadata.ignorePropagatedAnnotations:true
define view I_EHSAmountSourceType
  as select from dd07l
  association [0..*] to I_EHSAmountSourceTypeName as _Text on $projection.EHSAmountSourceType = _Text.EHSAmountSourceType
{
      @EndUserText.label: 'Data Source Type'
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as abap.char(2) ) as EHSAmountSourceType,
      // association
      _Text

}
where
      dd07l.domname  = 'EHFND_AMNS_SRC_TYPE'
  and dd07l.as4local = 'A'
```
