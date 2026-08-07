---
name: ZI_PARAMETER.DDLS
description: parameter
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/zzvikesh/ar2bkp_cust_attr/blob/9565b611d46041eb023988b772d3a1965dd3038f/src/zi_parameter.ddls.asddls
semantic_en: parameter — CDS view.
semantic_vi: parameter — CDS view dựa trên parameter.
keywords:
  - parameter
  - customer
  - sales
  - organization
  - distribution
  - channel
  - division
  - shipping
  - point
---
# ZI_PARAMETER.DDLS

**parameter**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/zzvikesh/ar2bkp_cust_attr/blob/9565b611d46041eb023988b772d3a1965dd3038f/src/zi_parameter.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `customer` |  | |  | `kunnr` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `Division` |  | |  | `spart` |  |  |
| `ShippingPoint` |  | |  | `vstel` |  |  |

## Source Code

*Source: [https://github.com/zzvikesh/ar2bkp_cust_attr/blob/9565b611d46041eb023988b772d3a1965dd3038f/src/zi_parameter.ddls.asddls](https://github.com/zzvikesh/ar2bkp_cust_attr/blob/9565b611d46041eb023988b772d3a1965dd3038f/src/zi_parameter.ddls.asddls)*

```abap
@EndUserText.label: 'parameter'
define root abstract entity zi_parameter
  //  with parameters
  //    parameter_name : parameter_type
{
  //@UI.defaultValue : #( 'ELEMENT_OF_REFERENCED_ENTITY: Customer')
  //@UI.defaultValue    : #( 'CustomerShippingPoint: Customer')
  //@UI.defaultValue : #( 'ZM_R_CustomerShipPointTP: Customer')
  @Consumption.hidden: true
  @UI.hidden          : true
  customer            : kunnr;
  @UI.hidden          : true
  SalesOrganization   : vkorg;
  @UI.hidden          : true
  DistributionChannel : vtweg;
  @UI.hidden          : true
  Division            : spart;
  ShippingPoint       : vstel;

}
```
