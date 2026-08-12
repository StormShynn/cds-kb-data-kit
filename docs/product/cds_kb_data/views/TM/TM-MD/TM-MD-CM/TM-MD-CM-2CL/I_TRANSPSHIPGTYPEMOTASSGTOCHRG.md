---
name: I_TRANSPSHIPGTYPEMOTASSGTOCHRG
description: "This CDS view is a basic view to retrieve transportation modes and shipping type that are assigned to a charge type. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: TM-MD-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPSHIPGTYPEMOTASSGTOCHRG')/$value
semantic_en: "This CDS view is a basic view to retrieve transportation modes and shipping type that are assigned to a charge type. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "I_TRANSPSHIPGTYPEMOTASSGTOCHRG — CDS view cơ bản dựa trên I_TRANSPSHIPGTYPEMOTASSGTOCHRG."
keywords:
  - "transpshipgtypemotassgtochrg"
  - "transp"
  - "charge"
  - "type"
  - "transportation"
  - "mode"
  - "shipping"
tags:
  - TM
  - bo:companycode
  - component:TM-MD-CM-2CL
  - interface-view
  - TM-MD
  - TM-MD-CM
  - TM-MD-CM-2CL
  - bo:project
---
# I_TRANSPSHIPGTYPEMOTASSGTOCHRG

**This CDS view is a basic view to retrieve transportation modes and shipping type that are assigned to a charge type. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPSHIPGTYPEMOTASSGTOCHRG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspChargeType` | ✓ | |  | `tcet084` | `CHAR(15)` | Charge Type |
| `TransportationMode` | ✓ | |  | `mot` | `CHAR(2)` | Transportation Mode Code |
| `TransportationShippingType` | ✓ | |  | `shipping_type` | `CHAR(3)` | Shipping Type |
| `_TranspChargeType` | | ✓ | | | | |
| `_TransportationMode` | | ✓ | | | | |
| `_TranspOrdShippingType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspChargeType` | `I_TranspChargeType` | [0..1] |
| `_TransportationMode` | `I_TransportationMode_2` | [0..1] |
| `_TranspOrdShippingType` | `I_TranspOrdShippingType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPSHIPGTYPEMOTASSGTOCHRG')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPSHIPGTYPEMOTASSGTOCHRG')/$value)*

```abap
@EndUserText:   {label:                    'Transp ShippingType and MOT assg to Chrg'}
@ObjectModel:   {representativeKey:        'TranspChargeType',
                 usageType:                { serviceQuality: #A,
                                           sizeCategory:   #M,
                                           dataClass:      #CUSTOMIZING},
                 supportedCapabilities:  [ #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:                 #BASIC}
//                  lifecycle.contract.type: #NONE }
@AbapCatalog:   {sqlViewName:              'ISHPTYPMOTCHRG',
                 buffering:                {status: #ACTIVE,
                                           type:   #FULL},
                 compiler:                 {compareFilter: true} }
@AccessControl: {authorizationCheck:       #NOT_REQUIRED}
@ClientHandling.algorithm:                 #SESSION_VARIABLE
@Metadata:      {allowExtensions:          true,
                 ignorePropagatedAnnotations: true}
define view I_TranspShipgTypeMOTAssgToChrg
  as select from /scmtms/c_srvtyp
  association [0..1] to I_TranspChargeType      as _TranspChargeType      on $projection.TranspChargeType = _TranspChargeType.TranspChargeType
  association [0..1] to I_TransportationMode_2  as _TransportationMode    on $projection.TransportationMode = _TransportationMode.TransportationMode
  association [0..1] to I_TranspOrdShippingType as _TranspOrdShippingType on $projection.TransportationShippingType = _TranspOrdShippingType.TranspOrdShippingType
{
      @ObjectModel.foreignKey.association: '_TranspChargeType'
  key tcet084       as TranspChargeType,
      @ObjectModel.foreignKey.association: '_TransportationMode'
  key mot           as TransportationMode,
      @ObjectModel.foreignKey.association: '_TranspOrdShippingType'
  key shipping_type as TransportationShippingType,

      /*Association*/
      _TranspChargeType,
      _TransportationMode,
      _TranspOrdShippingType
}
```
