---
name: I_JITCUSTOMERSUPPLYAREADESC
description: "This CDS view provides language-specific descriptions for supply area configurations. It enables you to retrieve the language-dependent destination details comprised of customer supply area, unloading point, and customer assembly location. This CDS view provides the data to answer the following business questions: What is the description of a supply area in a specific language? Which languages have descriptions for supply areas? How many supply areas, unloading points, and assembly locations exist for each customer? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMERSUPPLYAREADESC')/$value
semantic_en: "This CDS view provides language-specific descriptions for supply area configurations. It enables you to retrieve the language-dependent destination details comprised of customer supply area, unloading point, and customer assembly location. This CDS view provides the data to answer the following business questions: What is the description of a supply area in a specific language? Which languages have descriptions for supply areas? How many supply areas, unloading points, and assembly locations exist for each customer? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "JIT Customer Supply Area Description — CDS view giao diện dựa trên njit_d_cust_sa_t."
keywords:
  - "jit"
  - "customer"
  - "supply"
  - "area"
  - "description"
  - "language"
  - "ship"
  - "party"
  - "cust"
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
# I_JITCUSTOMERSUPPLYAREADESC

**This CDS view provides language-specific descriptions for supply area configurations. It enables you to retrieve the language-dependent destination details comprised of customer supply area, unloading point, and customer assembly location. This CDS view provides the data to answer the following business questions: What is the description of a supply area in a specific language? Which languages have descriptions for supply areas? How many supply areas, unloading points, and assembly locations exist for each customer? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMERSUPPLYAREADESC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplyAreaUUID` | ✓ | |  | `supplyareauuid` | `RAW(16)` | NodeID |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `CustomerUUID` |  | |  | `customeruuid` | `RAW(16)` | NodeID |
| `ShipToParty` |  | |  | `shiptoparty` | `CHAR(10)` | Ship-to Party |
| `CustSupplyArea` |  | |  | `custsupplyarea` | `CHAR(10)` | Customer Supply Area |
| `SupplyAreaDesc` |  | |  | `supplyareadesc` | `CHAR(35)` | Supply Area Description |
| `_Language` | | ✓ | | | | |
| `_JITCustomer` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_JITCustomerSupplyArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_JITCustomer` | `I_JITCustomer` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMERSUPPLYAREADESC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMERSUPPLYAREADESC')/$value)*

```abap
@AccessControl: {
  authorizationCheck        : #MANDATORY,
  personalData              : { blocking: #REQUIRED }
}
@Analytics                  : { internalName  : #LOCAL,
                                technicalName : 'IJITCSADESC' }
@EndUserText.label          : 'JIT Customer Supply Area Description'
@ObjectModel                : {
    dataCategory            : #TEXT,
    modelingPattern         : #LANGUAGE_DEPENDENT_TEXT,
    representativeKey       : 'SupplyAreaUUID',
    sapObjectNodeType.name  : 'JITCustomerSupplyAreaDesc',
    supportedCapabilities   : [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
    usageType               : { dataClass       : #MASTER,
                                serviceQuality  : #A,
                                sizeCategory    : #S }
}
@VDM.viewType               : #BASIC
define view entity I_JITCustomerSupplyAreaDesc
  as select from njit_d_cust_sa_t

  association [0..1] to I_Language                     as _Language              on $projection.Language = _Language.Language

  association        to parent I_JITCustomerSupplyArea as _JITCustomerSupplyArea on $projection.SupplyAreaUUID = _JITCustomerSupplyArea.SupplyAreaUUID

  association [0..1] to I_JITCustomer                  as _JITCustomer           on $projection.CustomerUUID = _JITCustomer.CustomerUUID

  association [0..1] to I_Customer                     as _Customer              on $projection.ShipToParty = _Customer.Customer

{
      @ObjectModel.foreignKey.association: '_JITCustomerSupplyArea'
      @ObjectModel.text.element : ['SupplyAreaDesc']
  key supplyareauuid as SupplyAreaUUID,
      @Semantics.language: true
  key language       as Language,
      @ObjectModel.foreignKey.association: '_JITCustomer'
      customeruuid   as CustomerUUID,
      @ObjectModel.foreignKey.association: '_Customer'
      shiptoparty    as ShipToParty,
      custsupplyarea as CustSupplyArea,
      @Semantics.text: true
      supplyareadesc as SupplyAreaDesc,

      // Association
      _Language,
      _JITCustomerSupplyArea,
      _JITCustomer,
      _Customer
}
```
