---
name: I_BR_NFIMPRTINDFUELORIGIN
description: "This CDS view provides the fuel origin import indicator codes available to be used in the nota fiscal document. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFIMPRTINDFUELORIGIN')/$value
semantic_en: "This CDS view provides the fuel origin import indicator codes available to be used in the nota fiscal document. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Brazil Fuel Origin Import Indicator — CDS view giao diện dựa trên dd07l."
keywords:
  - "brazil"
  - "fuel"
  - "origin"
  - "import"
  - "indicator"
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-LO-BR
  - document
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-BR
  - interface-view
  - lob:finance
  - lob:logistics general
---
# I_BR_NFIMPRTINDFUELORIGIN

**This CDS view provides the fuel origin import indicator codes available to be used in the nota fiscal document. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFIMPRTINDFUELORIGIN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NFImportIndicatorFuelOrigin` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_importindfuelorigin preserving type )` | `CHAR(1)` | Fuel Origin Import Indicator |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_NFImprtIndFuelOriginText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFIMPRTINDFUELORIGIN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFIMPRTINDFUELORIGIN')/$value)*

```abap
@EndUserText.label: 'Brazil Fuel Origin Import Indicator'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFINDIMPORT'
@ObjectModel.representativeKey: 'BR_NFImportIndicatorFuelOrigin'
@ObjectModel.compositionRoot: true
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE, 
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.dataCategory: #VALUE_HELP
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
define view I_BR_NFImprtIndFuelOrigin as select from dd07l
  association [0..*] to I_BR_NFImprtIndFuelOriginText as _Text on $projection.BR_NFImportIndicatorFuelOrigin = _Text.BR_NFImportIndicatorFuelOrigin
{
  @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_importindfuelorigin preserving type ) as BR_NFImportIndicatorFuelOrigin,  
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname  = 'J_1B_NF_INDIMPORT' 
  and as4local = 'A'
```
