---
name: I_TERNARYLOGICALSTATE
description: "This CDS view provides you with the supported values for ternary logical states. A ternary logical state represents a three-valued logic system that extends traditional binary logic (true/false) by adding a third state for unknown or indeterminate values. You can use this view as a reference for valid ternary logical state values in your applications and reports, particularly when you need to distinguish between negative values and unknown or indeterminate states. The following values are available: Value Meaning X Yes (blank) No - Unknown To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TERNARYLOGICALSTATE')/$value
semantic_en: "This CDS view provides you with the supported values for ternary logical states. A ternary logical state represents a three-valued logic system that extends traditional binary logic (true/false) by adding a third state for unknown or indeterminate values. You can use this view as a reference for valid ternary logical state values in your applications and reports, particularly when you need to distinguish between negative values and unknown or indeterminate states. The following values are available: Value Meaning X Yes (blank) No - Unknown To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Ternary Logical State — CDS view giao diện dựa trên dd07l."
keywords:
  - "ternary"
  - "logical"
  - "state"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND
  - EHS-SUS
  - EHS-SUS-FND
  - interface-view
---
# I_TERNARYLOGICALSTATE

**This CDS view provides you with the supported values for ternary logical states. A ternary logical state represents a three-valued logic system that extends traditional binary logic (true/false) by adding a third state for unknown or indeterminate values. You can use this view as a reference for valid ternary logical state values in your applications and reports, particularly when you need to distinguish between negative values and unknown or indeterminate states. The following values are available: Value Meaning X Yes (blank) No - Unknown To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TERNARYLOGICALSTATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TernaryLogicalState` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as ehfnd_tri_state preserving type )` | `CHAR(1)` | Tristate |
| `_TernaryLogicalStateText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TernaryLogicalStateText` | `I_TernaryLogicalStateText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TERNARYLOGICALSTATE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TERNARYLOGICALSTATE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ITRNRYLGCLSTATE'
@Analytics: { dataCategory:#DIMENSION  }
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@ObjectModel.representativeKey: 'TernaryLogicalState'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Ternary Logical State'


// Client handling by session 
@ClientHandling.algorithm: #SESSION_VARIABLE

// used for ddic access
@ObjectModel.usageType:{ serviceQuality: #C,        // < 15 msec   
                         sizeCategory:  #L,         // < 10.000.000
                         dataClass: #META } 
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.resultSet.sizeCategory: #XS

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_TernaryLogicalState as select from dd07l 
    association [0..*] to I_TernaryLogicalStateText as _TernaryLogicalStateText on  $projection.TernaryLogicalState = _TernaryLogicalStateText.TernaryLogicalState 
    
{
   @ObjectModel.text.association: '_TernaryLogicalStateText'
   key cast ( substring( domvalue_l, 1, 1 ) as ehfnd_tri_state preserving type ) as TernaryLogicalState,
   _TernaryLogicalStateText
} where dd07l.domname = 'EHFND_TRI_STATE' and dd07l.as4local = 'A'
```
