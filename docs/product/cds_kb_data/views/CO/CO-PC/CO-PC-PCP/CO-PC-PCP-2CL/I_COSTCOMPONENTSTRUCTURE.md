---
name: I_COSTCOMPONENTSTRUCTURE
description: "Cost Component Structure"
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCOMPONENTSTRUCTURE')/$value
semantic_en: "Cost Component Structure"
semantic_vi: "Cost Component Structure — CDS view giao diện dựa trên tckh4."
keywords:
  - "cost"
  - "component"
  - "structure"
tags:
  - CO
  - bo:purchaseorder
  - CO-PC
  - CO-PC-PCP
  - CO-PC-PCP-2CL
  - component:CO-PC-PCP-2CL
  - interface-view
  - lob:controlling
---
# I_COSTCOMPONENTSTRUCTURE

**Cost Component Structure**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCOMPONENTSTRUCTURE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostComponentStructure` | ✓ | |  | `elehk` | `CHAR(2)` | Cost Component Structure - CGM and Sales/Administr. Costs |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CostComponentStructureText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCOMPONENTSTRUCTURE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCOMPONENTSTRUCTURE')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'ICOSTCOMPSTRUC',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering: {
    type: #GENERIC,
    numberOfKeyFields: 1,
    status: #ACTIVE } }
@ClientHandling: {
  type: #CLIENT_DEPENDENT,
  algorithm: #SESSION_VARIABLE }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.supportedCapabilities:[#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION]
@VDM.viewType: #BASIC
@ObjectModel: {
  representativeKey: 'CostComponentStructure',
  usageType: {
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #CUSTOMIZING } }
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Cost Component Structure'

define view I_CostComponentStructure
  as select from tckh4
  association [0..*] to I_CostComponentStructureText as _Text on $projection.CostComponentStructure = _Text.CostComponentStructure
{
      @ObjectModel.text.association: '_Text'
  key elehk as CostComponentStructure,
  
  _Text

}
```
