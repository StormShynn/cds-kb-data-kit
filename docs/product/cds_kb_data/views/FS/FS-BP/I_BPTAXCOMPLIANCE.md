---
name: I_BPTAXCOMPLIANCE
description: "Business Partner Tax Compliance"
app_component: FS-BP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCOMPLIANCE')/$value
semantic_en: "Business Partner Tax Compliance"
semantic_vi: "Business Partner Tax Compliance — CDS view giao diện (master data) dựa trên bptaxc."
keywords:
  - "business"
  - "partner"
  - "tax"
  - "compliance"
  - "type"
  - "country"
  - "region"
tags:
  - FS
  - bo:businesspartner
  - component:FS-BP
  - FS-BP
  - interface-view
---
# I_BPTAXCOMPLIANCE

**Business Partner Tax Compliance**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCOMPLIANCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` | `CHAR(10)` | Business Partner Number |
| `BPTaxComplianceID` | ✓ | |  | `id` | `CHAR(6)` | Tax Compliance ID |
| `BPTaxComplianceType` |  | |  | `type` | `CHAR(6)` | Tax Compliance Type |
| `BPTaxComplianceCountryRegion` |  | |  | `country` | `CHAR(3)` | Tax Compliance: Country/Region |
| `BPTaxComplianceRegion` |  | |  | `region` | `CHAR(3)` | Tax Compliance: Region |
| `BPTaxComplianceStatus` |  | |  | `status` | `CHAR(1)` | Tax Compliance Status |
| `BPTaxComplianceStatusReason` |  | |  | `reason` | `CHAR(2)` | Tax Compliance: Reason for Status |
| `BPTaxComplianceValidFromDate` |  | |  | `valid_from` | `DATS(8)` | Tax Compliance: Start Date |
| `BPTaxComplianceValidToDate` |  | |  | `valid_to` | `DATS(8)` | Tax Compliance: End Date |
| `BPTaxComplianceRatingDate` |  | |  | `date_when` | `DATS(8)` | Tax Compliance: Rating Date |
| `BPTaxComplianceAgreementStatus` |  | |  | `agree_status` | `CHAR(1)` | Tax Compliance: Agreement Status |
| `BPTaxComplianceAgreementDate` |  | |  | `agree_date` | `DATS(8)` | Tax Compliance: Agreement Date |
| `_BusinessPartner` | | ✓ | | | | |
| `_BPFinancialServicesExtn` | | ✓ | | | | |
| `_BPTaxComplianceType` | | ✓ | | | | |
| `_BPTaxComplianceTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1] |
| `_BPFinancialServicesExtn` | `I_BPFinancialServicesExtn` | [0..1] |
| `_BPTaxComplianceType` | `I_BPTaxComplianceType` | [0..1] |
| `_BPTaxComplianceTypeText` | `I_BPTaxComplianceTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCOMPLIANCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCOMPLIANCE')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'IBPTAXCOMPLIANCE',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@AccessControl: {authorizationCheck: #MANDATORY,
                 personalData.blocking: #REQUIRED
                }
@ObjectModel: { representativeKey: 'BPTaxComplianceID',
                sapObjectNodeType.name: 'BusinessPartnerTaxCompliance',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE ]            
              }
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL
            }
@Metadata: { ignorePropagatedAnnotations: true,  // For C1-Release
             allowExtensions:true
           }
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]                       
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Business Partner Tax Compliance'

define view I_BPTaxCompliance
  as select from bptaxc
  association [1]    to I_BusinessPartner         as _BusinessPartner         on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_BPFinancialServicesExtn as _BPFinancialServicesExtn on $projection.BusinessPartner = _BPFinancialServicesExtn.BusinessPartner
  association [0..1] to I_BPTaxComplianceType     as _BPTaxComplianceType     on $projection.BPTaxComplianceType = _BPTaxComplianceType.BPTaxComplianceType
  association [0..*] to I_BPTaxComplianceTypeText as _BPTaxComplianceTypeText on $projection.BPTaxComplianceType = _BPTaxComplianceTypeText.BPTaxComplianceType
{
      @ObjectModel.foreignKey.association: '_BusinessPartner'
  key bptaxc.partner      as BusinessPartner,
  key bptaxc.id           as BPTaxComplianceID,
      bptaxc.type         as BPTaxComplianceType,
      bptaxc.country      as BPTaxComplianceCountryRegion,
      bptaxc.region       as BPTaxComplianceRegion,
      bptaxc.status       as BPTaxComplianceStatus,
      bptaxc.reason       as BPTaxComplianceStatusReason,
      bptaxc.valid_from   as BPTaxComplianceValidFromDate,
      bptaxc.valid_to     as BPTaxComplianceValidToDate,
      bptaxc.date_when    as BPTaxComplianceRatingDate,
      bptaxc.agree_status as BPTaxComplianceAgreementStatus,
      bptaxc.agree_date   as BPTaxComplianceAgreementDate,

      _BusinessPartner,
      _BPFinancialServicesExtn,
      _BPTaxComplianceType,
      _BPTaxComplianceTypeText

}
```
