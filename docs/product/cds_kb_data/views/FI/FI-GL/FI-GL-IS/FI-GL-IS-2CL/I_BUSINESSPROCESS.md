---
name: I_BUSINESSPROCESS
description: "This CDS view is designed to provide a structured representation of business processes within a controlling area. It serves as a master data source for business processes, enabling data extraction and analytical operations. The view includes associations to related texts and controlling area information, facilitating comprehensive insights into business processes. This CDS view provides the data to answer the following business questions: What are the distinct business processes within a specific controlling area? How can I access the textual descriptions and details of business processes for a given controlling area? What are the current valid business processes based on the system date? How can I retrieve associated controlling area information for a particular business process? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPROCESS')/$value
semantic_en: "This CDS view is designed to provide a structured representation of business processes within a controlling area. It serves as a master data source for business processes, enabling data extraction and analytical operations. The view includes associations to related texts and controlling area information, facilitating comprehensive insights into business processes. This CDS view provides the data to answer the following business questions: What are the distinct business processes within a specific controlling area? How can I access the textual descriptions and details of business processes for a given controlling area? What are the current valid business processes based on the system date? How can I retrieve associated controlling area information for a particular business process? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Business Process — CDS view giao diện dựa trên Business Process."
keywords:
  - "business"
  - "process"
  - "controlling"
  - "area"
tags:
  - FI
  - bo:businesspartner
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - master-data
---
# I_BUSINESSPROCESS

**This CDS view is designed to provide a structured representation of business processes within a controlling area. It serves as a master data source for business processes, enabling data extraction and analytical operations. The view includes associations to related texts and controlling area information, facilitating comprehensive insights into business processes. This CDS view provides the data to answer the following business questions: What are the distinct business processes within a specific controlling area? How can I access the textual descriptions and details of business processes for a given controlling area? What are the current valid business processes based on the system date? How can I retrieve associated controlling area information for a particular business process? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPROCESS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` | ✓ | |  | `cast( kokrs as fis_kokrs preserving type )` | `CHAR(4)` | Controlling Area |
| `BusinessProcess` | ✓ | |  | `prznr` | `CHAR(12)` | Business Process |
| `_ControllingAreaText` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_CurrentBusinessProcessText` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_Text` | `I_BusinessProcessText` | [0..*] |
| `_CurrentBusinessProcessText` | `I_CurrentBusinessProcessText` | [0..*] |
| `_ControllingArea` | `I_ControllingArea` | [1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPROCESS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPROCESS')/$value)*

```abap
@EndUserText.label: 'Business Process'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ObjectModel.representativeKey: 'BusinessProcess'
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #M
}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIBUSPROCESS'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #CHECK //NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.allowExtensions: true 
@Metadata.ignorePropagatedAnnotations: true

//--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
@AccessControl.privilegedAssociations: ['_ControllingAreaText']
// ]--GENERATED
@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]

define view I_BusinessProcess
as select distinct from cbpr

  //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
  association [0..1] to I_ControllingArea      as _ControllingAreaText on   $projection.ControllingArea = _ControllingAreaText.ControllingArea
  // ]--GENERATED
  association[0..*] to I_BusinessProcessText as _Text on  $projection.ControllingArea = _Text.ControllingArea 
                                                      and $projection.BusinessProcess = _Text.BusinessProcess 
                                                      and _Text.ValidityEndDate   >= $session.system_date
                                                      and _Text.ValidityStartDate <= $session.system_date
association[0..*] to I_CurrentBusinessProcessText as _CurrentBusinessProcessText on  $projection.ControllingArea = _CurrentBusinessProcessText.ControllingArea 
                                                      and $projection.BusinessProcess = _CurrentBusinessProcessText.BusinessProcess                                                       
  association[1] to I_ControllingArea as _ControllingArea on   $projection.ControllingArea = _ControllingArea.ControllingArea  
{

      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_ControllingArea' //Inserted by VDM CDS Suite Plugin
  key cast( kokrs as fis_kokrs preserving type ) as ControllingArea,

@ObjectModel.text.association: '_CurrentBusinessProcessText'
  key prznr as BusinessProcess,
@Consumption.hidden: true  
  _Text,
  _ControllingArea,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.hidden: true
      _ControllingAreaText,
      // ]--GENERATED
_CurrentBusinessProcessText      

};
```
