---
name: I_JITCUSTOMEREXTERNALSTATUS
description: "The JIT customer external status mapping contains the mapping between transmitted status and external status. However, different customers often transmit different descriptions for the same business process. You convert the external status information into an external status that is unique within your system. This CDS view provides the data to answer the following business questions: What is the status mapping for each customer? Which external status information does your customer transmit? How is the transmitted status converted to external status? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMEREXTERNALSTATUS')/$value
semantic_en: "The JIT customer external status mapping contains the mapping between transmitted status and external status. However, different customers often transmit different descriptions for the same business process. You convert the external status information into an external status that is unique within your system. This CDS view provides the data to answer the following business questions: What is the status mapping for each customer? Which external status information does your customer transmit? How is the transmitted status converted to external status? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "JIT Customer External Status — CDS view giao diện dựa trên njit_d_cust_exst."
keywords:
  - "jit"
  - "customer"
  - "external"
  - "status"
  - "mapping"
  - "ship"
  - "party"
  - "transmitted"
  - "supplier"
tags:
  - LE
  - bo:businesspartner
  - component:LE-JIT-S2C
  - customer
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
---
# I_JITCUSTOMEREXTERNALSTATUS

**The JIT customer external status mapping contains the mapping between transmitted status and external status. However, different customers often transmit different descriptions for the same business process. You convert the external status information into an external status that is unique within your system. This CDS view provides the data to answer the following business questions: What is the status mapping for each customer? Which external status information does your customer transmit? How is the transmitted status converted to external status? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMEREXTERNALSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExternalStatusMappingUUID` | ✓ | |  | `externalstatusmappinguuid` | `RAW(16)` | NodeID |
| `CustomerUUID` |  | |  | `customeruuid` | `RAW(16)` | NodeID |
| `ShipToParty` |  | |  | `shiptoparty` | `CHAR(10)` | Ship-to Party |
| `TransmittedExtStatusByMfr` |  | |  | `transmittedextstatusbymfr` | `CHAR(35)` | Transmitted External Status by Manufacturer |
| `JITExtStatusAtSupplier` |  | |  | `jitextstatusatsupplier` | `CHAR(4)` | JIT External Status at Supplier |
| `_Customer` | | ✓ | | | | |
| `_SupplierExtStatus` | | ✓ | | | | |
| `_JITCustomer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Customer` | `I_Customer` | [0..1] |
| `_SupplierExtStatus` | `I_SupplierExtStatus` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMEREXTERNALSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMEREXTERNALSTATUS')/$value)*

```abap
@AccessControl: {
  authorizationCheck        : #MANDATORY,
  personalData              : { blocking        : #REQUIRED }
}
@Analytics                  : { dataCategory  : #DIMENSION,
                                internalName  : #LOCAL }
@EndUserText.label          : 'JIT Customer External Status'
@Metadata.allowExtensions   : true
@ObjectModel                : {
  modelingPattern           : #ANALYTICAL_DIMENSION,
  representativeKey         : 'ExternalStatusMappingUUID',
  sapObjectNodeType.name    : 'JITCustomerExtStatusMapping',
  supportedCapabilities     : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ] ,
  usageType                 : { dataClass       : #MASTER,
                                serviceQuality  : #A,
                                sizeCategory    : #S
                              }
}
@VDM.viewType               : #BASIC
define view entity I_JITCustomerExternalStatus
  as select from njit_d_cust_exst

  association        to parent I_JITCustomer as _JITCustomer       on $projection.CustomerUUID = _JITCustomer.CustomerUUID

  association [0..1] to I_Customer           as _Customer          on $projection.ShipToParty = _Customer.Customer

  association [0..1] to I_SupplierExtStatus  as _SupplierExtStatus on $projection.JITExtStatusAtSupplier = _SupplierExtStatus.JITExtStatusAtSupplier

{
  key externalstatusmappinguuid as ExternalStatusMappingUUID,
      @ObjectModel.foreignKey.association: '_JITCustomer'
      customeruuid              as CustomerUUID,
      @ObjectModel.foreignKey.association: '_Customer'
      shiptoparty               as ShipToParty,
      transmittedextstatusbymfr as TransmittedExtStatusByMfr,
      /* start suppress warning shlporigin_not_inherited */
      @ObjectModel.foreignKey.association: '_SupplierExtStatus'
      jitextstatusatsupplier    as JITExtStatusAtSupplier,
      /* end suppress warning shlporigin_not_inherited */
      //Associations
      _JITCustomer,
      _SupplierExtStatus,
      _Customer
}
```
