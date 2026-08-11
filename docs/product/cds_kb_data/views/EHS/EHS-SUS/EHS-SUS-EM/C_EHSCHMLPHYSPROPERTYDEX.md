---
name: C_EHSCHMLPHYSPROPERTYDEX
description: "This CDS view supports the extraction of chemical/physical property master data for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can chemical/physical properties be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSCHMLPHYSPROPERTYDEX')/$value
semantic_en: "This CDS view supports the extraction of chemical/physical property master data for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can chemical/physical properties be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Chemical Physical Property — CDS view tiêu dùng dựa trên I_EHSChemicalPhysicalProperty."
keywords:
  - "ehs"
  - "chemical"
  - "physical"
  - "property"
  - "chml"
  - "phys"
  - "prpty"
  - "confign"
  - "vers"
  - "central"
  - "prop"
  - "migration"
  - "source"
tags:
  - EHS
  - bo:businesspartner
  - component:EHS-SUS-EM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-EM
  - master-data
  - transaction
---
# C_EHSCHMLPHYSPROPERTYDEX

**This CDS view supports the extraction of chemical/physical property master data for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can chemical/physical properties be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSCHMLPHYSPROPERTYDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSChmlPhysPrptyBusConfignVers` | ✓ | |  |  | `CHAR(40)` | BCO ID |
| `EHSChmlPhysPrptyCentralID` | ✓ | |  |  | `CHAR(32)` | BCO KEY |
| `EHSChemicalPhysicalPropUUID` |  | |  |  | `RAW(16)` | NodeID |
| `EHSChemicalPhysicalPropID` |  | |  |  | `CHAR(20)` | id |
| `ChmlPhysPropMigrationSource` |  | |  |  | `CHAR(60)` | Migration Source |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSCHMLPHYSPROPERTYDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSCHMLPHYSPROPERTYDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'EHS Chemical Physical Property'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #B,
  sizeCategory: #M,
  dataClass: #MASTER
}
@ObjectModel: { 
  supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
  modelingPattern: #NONE,
  sapObjectNodeType.name: 'EHSChemicalPhysicalProperty'
}
@VDM.viewType: #CONSUMPTION
@Analytics.dataExtraction.enabled:true
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity C_EHSChmlPhysPropertyDEX
  as select from I_EHSChemicalPhysicalProperty
{
      @EndUserText.label: 'Chemical/Physical Property Identifier '
  key EHSChmlPhysPrptyBusConfignVers,
      @EndUserText.label: 'Chemical/Physical Character Key '
  key EHSChmlPhysPrptyCentralID,
      @EndUserText.label: 'Chemical/Physical Property Key'
      EHSChemicalPhysicalPropUUID,
      @EndUserText.label: 'Chemical/Physical Property ID'
      EHSChemicalPhysicalPropID,
      @EndUserText.label: 'Migration Source'
      ChmlPhysPropMigrationSource
}
```
