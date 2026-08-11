---
name: I_JITCUSTOMERREFERENCETYPE
description: "This CDS view retrieves the information of reference types for additional reference data transmitted by the OEM. It provides information about customer-specific reference type configurations used in JIT processing. This CDS view provides the data to answer the following business questions: What are the additional reference data sent by the OEM? How many reference types are present for each customer? What is the display order for reference texts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMERREFERENCETYPE')/$value
semantic_en: "This CDS view retrieves the information of reference types for additional reference data transmitted by the OEM. It provides information about customer-specific reference type configurations used in JIT processing. This CDS view provides the data to answer the following business questions: What are the additional reference data sent by the OEM? How many reference types are present for each customer? What is the display order for reference texts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "JIT Customer Reference Type — CDS view giao diện dựa trên njit_d_cust_rtxt."
keywords:
  - "jit"
  - "customer"
  - "reference"
  - "type"
  - "ship"
  - "party"
  - "text"
  - "display"
  - "order"
tags:
  - LE
  - bo:businesspartner
  - component:LE-JIT-S2C
  - customer
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - order
---
# I_JITCUSTOMERREFERENCETYPE

**This CDS view retrieves the information of reference types for additional reference data transmitted by the OEM. It provides information about customer-specific reference type configurations used in JIT processing. This CDS view provides the data to answer the following business questions: What are the additional reference data sent by the OEM? How many reference types are present for each customer? What is the display order for reference texts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMERREFERENCETYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReferenceTypeUUID` | ✓ | |  | `referencetypeuuid` | `RAW(16)` | NodeID |
| `CustomerUUID` |  | |  | `customeruuid` | `RAW(16)` | NodeID |
| `ShipToParty` |  | |  | `shiptoparty` | `CHAR(10)` | Ship-to Party |
| `JITRefType` |  | |  | `jitreftype` | `CHAR(4)` | Type of Reference Number |
| `JITReferenceTextDisplayOrder` |  | |  | `jitreferencetextdisplayorder` | `CHAR(2)` | NJIT : Reference Text Display Order |
| `_JITReferenceType` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_JITRefTextDisplayOrder` | | ✓ | | | | |
| `_JITCustomer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JITReferenceType` | `I_JITReferenceType` | [0..1] |
| `_Customer` | `I_Customer` | [1..1] |
| `_JITRefTextDisplayOrder` | `I_JITRefTextDisplayOrder` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMERREFERENCETYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMERREFERENCETYPE')/$value)*

```abap
@AccessControl: {
  authorizationCheck        : #MANDATORY,
  personalData              : { blocking: #REQUIRED }
}
@Analytics                  : { dataCategory    : #DIMENSION,
                                internalName    : #LOCAL } 
@EndUserText.label          : 'JIT Customer Reference Type'
@Metadata.allowExtensions   : true
@ObjectModel                : {
    modelingPattern         : #ANALYTICAL_DIMENSION,
    representativeKey       : 'ReferenceTypeUUID',
    sapObjectNodeType.name  : 'JITCustomerReferenceType',
    supportedCapabilities   : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
    usageType               : { dataClass       : #MASTER,
                                serviceQuality  : #A,
                                sizeCategory    : #S }    
}
@VDM.viewType               : #BASIC
define view entity I_JITCustomerReferenceType
  as select from njit_d_cust_rtxt

  association        to parent I_JITCustomer     as _JITCustomer            on $projection.CustomerUUID = _JITCustomer.CustomerUUID

  association [0..1] to I_JITReferenceType       as _JITReferenceType       on $projection.JITRefType = _JITReferenceType.JITRefType

  association [1..1] to I_Customer               as _Customer               on $projection.ShipToParty = _Customer.Customer

  association [0..1] to I_JITRefTextDisplayOrder as _JITRefTextDisplayOrder on $projection.JITReferenceTextDisplayOrder = _JITRefTextDisplayOrder.JITReferenceTextDisplayOrder

{
  key referencetypeuuid            as ReferenceTypeUUID,
      @ObjectModel.foreignKey.association: '_JITCustomer'
      customeruuid                 as CustomerUUID,
      @ObjectModel.foreignKey.association: '_Customer'
      shiptoparty                  as ShipToParty,
      @ObjectModel.foreignKey.association: '_JITReferenceType'
      jitreftype                   as JITRefType,
      @ObjectModel.foreignKey.association: '_JITRefTextDisplayOrder'
      jitreferencetextdisplayorder as JITReferenceTextDisplayOrder,

      //Associations
      _JITCustomer,
      _JITReferenceType,
      _Customer,
      _JITRefTextDisplayOrder
}
```
