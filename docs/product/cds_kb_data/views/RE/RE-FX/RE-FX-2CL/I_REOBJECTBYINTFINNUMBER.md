---
name: I_REOBJECTBYINTFINNUMBER
description: "Real Estate Obj by Internal FIN Number"
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REOBJECTBYINTFINNUMBER')/$value
semantic_en: "Real Estate Obj by Internal FIN Number"
semantic_vi: "Real Estate Obj by Internal FIN Number — CDS view giao diện dựa trên I_REKeyAssgmt."
keywords:
  - "real"
  - "estate"
  - "obj"
  - "internal"
  - "fin"
  - "number"
  - "status"
  - "object"
  - "type"
  - "identification"
tags:
  - RE
  - bo:companycode
  - component:RE-FX-2CL
  - interface-view
  - RE-FX
  - RE-FX-2CL
---
# I_REOBJECTBYINTFINNUMBER

**Real Estate Obj by Internal FIN Number**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REOBJECTBYINTFINNUMBER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REInternalFinNumber` | ✓ | |  |  | `CHAR(8)` | Internal Key of Real Estate Object (FI) |
| `REStatusObject` |  | |  |  | `CHAR(22)` | Object Number |
| `InternalRealEstateNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `RealEstateObjectType` |  | |  |  | `CHAR(2)` | Object Type |
| `REIdentificationKey` |  | |  |  | `CHAR(45)` | ID Part Key, for example "1000/123" |
| `REIdentification` |  | |  | `cast( concat_with_space(_REObjectTypeText.REObjectTypePrefix, REIdentificationKey,1 ) as recaident)` | `CHAR(50)` | Complete Object Identification, for Example BE 1000/123 |
| `REAccountingObjectName` |  | |  | `cast( concat_with_space(_REObjectTypeText.RealEstateObjectTypeName, REIdentificationKey,1 ) as recaident)` | `CHAR(50)` | Complete Object Identification, for Example BE 1000/123 |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `REBusinessEntity` |  | |  |  | `CHAR(8)` | RE Business Entity |
| `RERentalObject` |  | |  |  | `CHAR(8)` | RE Rental Object |
| `RealEstateBuilding` |  | |  |  | `CHAR(8)` | Real Estate Building |
| `RealEstateProperty` |  | |  |  | `CHAR(8)` | Real Estate Property |
| `REServiceChargeKey` |  | |  |  | `CHAR(4)` | RE Service Charge Key |
| `RESettlementUnitID` |  | |  |  | `CHAR(5)` | RE Settlement Unit |
| `_REObjectType` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REObjectTypeText` | `I_REObjectTypeText` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REOBJECTBYINTFINNUMBER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REOBJECTBYINTFINNUMBER')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IREOBJBYFINUM'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Obj by Internal FIN Number'

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'REInternalFinNumber'
@ObjectModel.semanticKey: [ 'InternalRealEstateNumber' ]
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET] 
@Metadata.ignorePropagatedAnnotations: true

define view I_REObjectByIntFinNumber
  as select from I_REKeyAssgmt as _REKeyAssgmt
  association [0..1] to I_REObjectTypeText as _REObjectTypeText on  _REObjectTypeText.RealEstateObjectType = $projection.RealEstateObjectType
                                                                and _REObjectTypeText.Language             = $session.system_language
{
  key       REInternalFinNumber,
            REStatusObject,
            InternalRealEstateNumber,
            RealEstateObjectType,
            REIdentificationKey,
            cast(
            concat_with_space(_REObjectTypeText.REObjectTypePrefix,
            REIdentificationKey,1 ) as recaident) as REIdentification,
            cast(
            concat_with_space(_REObjectTypeText.RealEstateObjectTypeName,
            REIdentificationKey,1 ) as recaident) as REAccountingObjectName,
            CompanyCode,
            RealEstateContract,
            REBusinessEntity,
            RERentalObject,
            RealEstateBuilding,
            RealEstateProperty,
            REServiceChargeKey,
            RESettlementUnitID,

            _REObjectType,
            _CompanyCode
}
where
  REInternalFinNumber is not initial
```
