---
name: I_BUSINESSPARTNERPRINTFORMATT
description: "Business PartnerPRINTFORMATT"
app_component: AP-MD-BP-RAP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - business-partner
  - partner
  - component:AP-MD-BP-RAP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERPRINTFORMATT

**Business PartnerPRINTFORMATT**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerPrintFormat` | ✓ | |  | `cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as bu_print_mode )` | `CHAR(1)` | Business Partner Print Format |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `BusinessPartnerPrintFormatText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPPRNTFRMTTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@Search.searchable: true
@EndUserText.label: 'Business Partner Category - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
  representativeKey: 'BusinessPartnerPrintFormat',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #META,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Metadata.ignorePropagatedAnnotations: true
define view I_BusinessPartnerPrintFormatT
  as select from dd07t
{
  key cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as bu_print_mode ) as BusinessPartnerPrintFormat,
      @Semantics.language: true
  key ddlanguage                                                                         as Language,
      @Semantics.text: true
      @EndUserText.label: 'Description'
      ddtext                                                                             as BusinessPartnerPrintFormatText,
      @Search.defaultSearchElement: true
      @Consumption.hidden: true
      domvalue_l                                                                         as DomainValue
}
where
  domname = 'BU_PRINT_MODE'
```
