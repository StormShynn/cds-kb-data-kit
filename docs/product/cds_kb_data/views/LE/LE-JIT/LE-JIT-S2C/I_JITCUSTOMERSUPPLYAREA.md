---
name: I_JITCUSTOMERSUPPLYAREA
description: "This CDS view provides the supply area configuration for JIT customers. It enables you to ascertain the destination details comprised of customer supply area, unloading point, and customer assembly location. This CDS view provides the data to answer the following business questions: How many supply areas, unloading points, and assembly locations exist for each customer? What are the destination details for a specific customer? Which unloading points are assigned to which supply areas? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMERSUPPLYAREA')/$value
semantic_en: "This CDS view provides the supply area configuration for JIT customers. It enables you to ascertain the destination details comprised of customer supply area, unloading point, and customer assembly location. This CDS view provides the data to answer the following business questions: How many supply areas, unloading points, and assembly locations exist for each customer? What are the destination details for a specific customer? Which unloading points are assigned to which supply areas? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "JIT Customer Supply Area — CDS view giao diện dựa trên njit_d_cust_sa."
keywords:
  - "jit"
  - "customer"
  - "supply"
  - "area"
  - "ship"
  - "party"
  - "cust"
  - "unloading"
  - "point"
  - "name"
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
# I_JITCUSTOMERSUPPLYAREA

**This CDS view provides the supply area configuration for JIT customers. It enables you to ascertain the destination details comprised of customer supply area, unloading point, and customer assembly location. This CDS view provides the data to answer the following business questions: How many supply areas, unloading points, and assembly locations exist for each customer? What are the destination details for a specific customer? Which unloading points are assigned to which supply areas? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMERSUPPLYAREA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplyAreaUUID` | ✓ | |  | `supplyareauuid` | `RAW(16)` | NodeID |
| `CustomerUUID` |  | |  | `customeruuid` | `RAW(16)` | NodeID |
| `ShipToParty` |  | |  | `shiptoparty` | `CHAR(10)` | Ship-to Party |
| `CustSupplyArea` |  | |  | `custsupplyarea` | `CHAR(10)` | Customer Supply Area |
| `UnloadingPointName` |  | |  | `unloadingpointname` | `CHAR(25)` | Unloading Point |
| `CustAssemblyLoc` |  | |  | `custassemblyloc` | `CHAR(20)` | Assembly Location at Customer Site |
| `_Customer` | | ✓ | | | | |
| `_CustomerUnloadingPoint` | | ✓ | | | | |
| `_JITCustomer` | | ✓ | | | | |
| `_JITCustomerSupplyAreaDesc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Customer` | `I_Customer` | [0..1] |
| `_CustomerUnloadingPoint` | `I_CustomerUnloadingPoint` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMERSUPPLYAREA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMERSUPPLYAREA')/$value)*

```abap
@AccessControl: {
  authorizationCheck        : #MANDATORY,
  personalData              : { blocking        : #REQUIRED }
}
@Analytics                  : { dataCategory  : #DIMENSION,
                                internalName  : #LOCAL }
@EndUserText.label          : 'JIT Customer Supply Area'
@Metadata.allowExtensions   : true
@ObjectModel                : {
  modelingPattern           : #ANALYTICAL_DIMENSION,
  representativeKey         : 'SupplyAreaUUID',
  sapObjectNodeType.name    : 'JITCustomerSupplyArea',
  supportedCapabilities     : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
  usageType                 : { dataClass       : #MASTER,
                                serviceQuality  : #A,
                                sizeCategory    : #S
                              }
}
@VDM.viewType               : #BASIC
define view entity I_JITCustomerSupplyArea
  as select from njit_d_cust_sa

  association        to parent I_JITCustomer               as _JITCustomer     on  $projection.CustomerUUID = _JITCustomer.CustomerUUID

  association [0..1] to I_Customer                  as _Customer               on  $projection.ShipToParty = _Customer.Customer
  
  composition [0..*] of I_JITCustomerSupplyAreaDesc as _JITCustomerSupplyAreaDesc  

  association [0..1] to I_CustomerUnloadingPoint    as _CustomerUnloadingPoint on  $projection.ShipToParty        = _CustomerUnloadingPoint.Customer
                                                                               and $projection.UnloadingPointName = _CustomerUnloadingPoint.UnloadingPointName

{
  key supplyareauuid     as SupplyAreaUUID,
      @ObjectModel.foreignKey.association: '_JITCustomer'
      customeruuid       as CustomerUUID,
      @ObjectModel.foreignKey.association: '_Customer'
      shiptoparty        as ShipToParty,
      custsupplyarea     as CustSupplyArea,
      @ObjectModel.foreignKey.association: '_CustomerUnloadingPoint'
      unloadingpointname as UnloadingPointName,
      custassemblyloc    as CustAssemblyLoc,

      //Associations
      _Customer,      
      _JITCustomer,
      _JITCustomerSupplyAreaDesc,
      _CustomerUnloadingPoint
}
```
