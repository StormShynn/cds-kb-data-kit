---
name: C_BKPOACOMPANYCODEFDP
description: "This CDS view provides the company code information for a power of attorney. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOACOMPANYCODEFDP')/$value
semantic_en: "This CDS view provides the company code information for a power of attorney. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "POA Company Code Form Data Provider — CDS view tiêu dùng dựa trên I_BkPOACompanyCode."
keywords:
  - "poa"
  - "company"
  - "code"
  - "form"
  - "data"
  - "provider"
  - "bank"
  - "power"
  - "attorney"
  - "authorization"
  - "group"
  - "name"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
  - bo:purchaseorder
---
# C_BKPOACOMPANYCODEFDP

**This CDS view provides the company code information for a power of attorney. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOACOMPANYCODEFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankPowerOfAttorneyUUID` | ✓ | |  |  | `RAW(16)` | Power of Attorney UUID |
| `BkPOACompanyCodeUUID` | ✓ | |  |  | `RAW(16)` | Power of Attorney: Company Code UUID |
| `BkPOAAuthorizationGroup` |  | | `_BankPowerOfAttorney` | `BkPOAAuthorizationGroup` | `CHAR(10)` | Authorization Group for Powers of Attorney |
| `BkPOACompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOACOMPANYCODEFDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOACOMPANYCODEFDP')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'POA Company Code Form Data Provider'
@Metadata.ignorePropagatedAnnotations: true
@VDM: { viewType: #CONSUMPTION }
@ObjectModel.usageType:{ serviceQuality: #C,
                         sizeCategory:   #S,
                         dataClass:      #MASTER }
@ObjectModel.modelingPattern:           #OUTPUT_FORM_DATA_PROVIDER
@ObjectModel.supportedCapabilities:  [  #OUTPUT_FORM_DATA_PROVIDER   ]
define view entity C_BkPOACompanyCodeFDP
  as select from I_BkPOACompanyCode
{
  key BankPowerOfAttorneyUUID,
  key BkPOACompanyCodeUUID,
      // for DCL
      _BankPowerOfAttorney.BkPOAAuthorizationGroup,
      BkPOACompanyCode,
      _CompanyCode.CompanyCodeName

}
where
  _BankPowerOfAttorney.BankPowerOfAttorneyIsBlocked <> 'X'
```
