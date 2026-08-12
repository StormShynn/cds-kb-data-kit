---
name: C_SLSMATLDETNRECORDDEX
description: "This CDS view is app-independent, and is available for all external consumers who want to extract material determination condition records to SAP Business Warehouse (SAP BW) or other external systems. This view combines the data of the following CDS views: Material Determination Condition Record (I_SlsMatlDeterminationRecord) Additional Substitute for Material Determination (I_SlsMatlDetnRecdAddlSubstit) To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SD-MD-MM-DET-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSMATLDETNRECORDDEX')/$value
semantic_en: "This CDS view is app-independent, and is available for all external consumers who want to extract material determination condition records to SAP Business Warehouse (SAP BW) or other external systems. This view combines the data of the following CDS views: Material Determination Condition Record (I_SlsMatlDeterminationRecord) Additional Substitute for Material Determination (I_SlsMatlDetnRecdAddlSubstit) To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Material Detn Condition Recd Extraction — CDS view tiêu dùng dựa trên I_SlsMatlDetnRecdAddlSubstit."
keywords:
  - "material"
  - "detn"
  - "condition"
  - "recd"
  - "extraction"
  - "record"
  - "matl"
  - "sequence"
  - "number"
  - "application"
  - "type"
  - "table"
tags:
  - SD
  - bo:companycode
  - component:SD-MD-MM-DET-2CL
  - consumption-view
  - lob:sales & distribution
  - lob:sourcing & procurement
  - material
  - SD-MD
  - SD-MD-MM
  - SD-MD-MM-DET
  - SD-MD-MM-DET-2CL
---
# C_SLSMATLDETNRECORDDEX

**This CDS view is app-independent, and is available for all external consumers who want to extract material determination condition records to SAP Business Warehouse (SAP BW) or other external systems. This view combines the data of the following CDS views: Material Determination Condition Record (I_SlsMatlDeterminationRecord) Additional Substitute for Material Determination (I_SlsMatlDetnRecdAddlSubstit) To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SD-MD-MM-DET-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSMATLDETNRECORDDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionRecord` | ✓ | |  |  | `CHAR(10)` | Number of Condition Record |
| `SlsMatlDetnSequenceNumber` | ✓ | |  |  | `CHAR(3)` | Number |
| `ConditionApplication` |  | |  |  | `CHAR(2)` | Application |
| `ConditionType` |  | |  |  | `CHAR(4)` | Material Determination Type |
| `ConditionTable` |  | |  |  | `CHAR(3)` | Condition Table |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SlsMatlDetnSubstituteMaterial` |  | |  |  | `CHAR(40)` | Substitute Material |
| `SlsMatlDetnSubstitMaterialUoM` |  | |  |  | `UNIT(3)` | Substitute Unit of Measure |
| `MaterialSubstitutionReason` |  | |  |  | `CHAR(4)` | Reason for material substitution |
| `ConditionValidityEndDate` |  | |  |  | `DATS(8)` | Validity end date of the condition record |
| `ConditionValidityStartDate` |  | |  |  | `DATS(8)` | Validity start date of the condition record |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `SDDocumentCategory` |  | |  |  | `CHAR(4)` | SD Document Category |
| `SalesDocumentType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `Customer` |  | |  |  | `CHAR(10)` | Customer number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `SalesEmployee` |  | |  |  | `NUMC(8)` | Sales Employee |
| `ForwardingAgent` |  | |  |  | `CHAR(10)` | Forwarding Agent |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductType` |  | |  |  | `CHAR(4)` | Product Type |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `MaterialPricingGroup` |  | |  |  | `CHAR(2)` | Material Price Group |
| `OriginallyRequestedMaterial` |  | |  |  | `CHAR(40)` | Material Entered |
| `PricingReferenceMaterial` |  | |  |  | `CHAR(40)` | Pricing Reference Material |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSMATLDETNRECORDDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSMATLDETNRECORDDEX')/$value)*

```abap
@EndUserText.label: 'Material Detn Condition Recd Extraction'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
serviceQuality: #X,
sizeCategory: #S,
dataClass: #MIXED
}

@VDM.viewType: #CONSUMPTION

@AccessControl:
{
  authorizationCheck: #MANDATORY,
  personalData.blocking: #REQUIRED
}

@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE

@Analytics:
{
dataExtraction: {
enabled: true

}
}

@ObjectModel.sapObjectNodeType.name: 'SlsMatlDetnRecdAddlSubstit'

define view entity C_SlsMatlDetnRecordDEX
  as select from    I_SlsMatlDetnRecdAddlSubstit as additional
    left outer to one join I_SlsMatlDeterminationRecord as substitute on additional.ConditionRecord = substitute.ConditionRecord
{
  key additional.ConditionRecord,
  key additional.SlsMatlDetnSequenceNumber,

      // *** Authorization Check Fields  ***
      substitute.ConditionApplication,
      substitute.ConditionType,
      substitute.ConditionTable,

      substitute.SalesOrganization,
      substitute.DistributionChannel,
      substitute.Division,

      // *** Data Fields ***

      additional.SlsMatlDetnSubstituteMaterial,
      additional.SlsMatlDetnSubstitMaterialUoM,
      substitute.MaterialSubstitutionReason,
      substitute.ConditionValidityEndDate,
      substitute.ConditionValidityStartDate,
      substitute.LastChangeDateTime,

      // *** Condition Fields ***

      substitute.SDDocumentCategory,
      substitute.SalesDocumentType,

      substitute.Customer,
      substitute.CustomerGroup,

      substitute.SoldToParty,
      substitute.ShipToParty,
      substitute.PayerParty,
      substitute.SalesEmployee,
      substitute.ForwardingAgent,

      substitute.Product,
      substitute.ProductType,
      substitute.ProductGroup,
      substitute.MaterialPricingGroup,
      substitute.OriginallyRequestedMaterial,
      substitute.PricingReferenceMaterial
}

union all

select from I_SlsMatlDeterminationRecord as substitute
{
  key ConditionRecord,
  key cast ( '001' as cnum3 ) as SlsMatlDetnSequenceNumber,

      // *** Authorization Check Fields  ***
      ConditionApplication,
      ConditionType,
      ConditionTable,

      SalesOrganization,
      DistributionChannel,
      Division,

      // *** Data Fields ***

      SlsMatlDetnSubstituteMaterial,
      SlsMatlDetnSubstitMaterialUoM,
      MaterialSubstitutionReason,
      ConditionValidityEndDate,
      ConditionValidityStartDate,
      LastChangeDateTime,

      // *** Condition Fields ***

      SDDocumentCategory,
      SalesDocumentType,

      Customer,
      CustomerGroup,

      SoldToParty,
      ShipToParty,
      PayerParty,
      SalesEmployee,
      ForwardingAgent,

      Product,
      ProductType,
      ProductGroup,
      MaterialPricingGroup,
      OriginallyRequestedMaterial,
      PricingReferenceMaterial
}
```
