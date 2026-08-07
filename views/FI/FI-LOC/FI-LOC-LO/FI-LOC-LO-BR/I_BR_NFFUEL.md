---
name: I_BR_NFFUEL
description: This CDS view displays the fuel detail for the nota fiscal items. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFFUEL')/$value
semantic_en: This CDS view displays the fuel detail for the nota fiscal items. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-LO-BR
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-BR
  - interface-view
  - lob:finance
  - lob:logistics general
  - metadata-only
---
# I_BR_NFFUEL

**This CDS view displays the fuel detail for the nota fiscal items. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFFUEL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NotaFiscal` |  | |  |  | `NUMC(10)` | Document Number |
| `BR_NotaFiscalItem` |  | |  |  | `NUMC(6)` | Document Item Number |
| `BR_ANPCode` |  | |  |  | `NUMC(9)` | ANP Product Code |
| `BR_NFRegisterCODIF` |  | |  |  | `NUMC(21)` | CODIF Code |
| `BR_NFeEnvrmtTemperatureFuelQty` |  | |  |  | `DEC(16)` | Fuel Quantity at Room Temperature |
| `BR_NFeFuelConsumerRegion` |  | |  |  | `CHAR(3)` | Region of Fuel Consumption |
| `BR_NFPercentageNaturalGasUnit` |  | |  |  | `UNIT(3)` | Unit of Measurement |
| `BR_NFNaturalGasPercent` |  | |  |  | `DEC(6)` | Natural Gas |
| `BR_NFFuelCIDETaxBaseQuantity` |  | |  |  | `DEC(16)` | Tax Base Quantity |
| `BR_NFFuelCIDETaxRate` |  | |  |  | `DEC(15)` | CIDE Tax Rate (value) |
| `BR_NFFuelCIDETaxAmount` |  | |  |  | `CURR(15)` | CIDE Amount |
| `BR_NFeFuelNozzle` |  | |  |  | `NUMC(3)` | Nozzle Number |
| `BR_NFeFuelPump` |  | |  |  | `NUMC(3)` | Pump Number |
| `BR_NFeFuelTank` |  | |  |  | `NUMC(3)` | Tank Number |
| `BR_NFeFuelGaugeStartQuantity` |  | |  |  | `DEC(12)` | Start Value of Gauge |
| `BR_NFeFuelGaugeEndQuantity` |  | |  |  | `DEC(12)` | End Value of Gauge |
| `BR_GLPRatioUnit` |  | |  |  | `UNIT(3)` | Unit of Measurement |
| `BR_GLPRatio` |  | |  |  | `DEC(7)` | Oil Derived from Gas |
| `BR_GLGNNRatioUnit` |  | |  |  | `UNIT(3)` | Unit of Measurement |
| `BR_GLGNNRatio` |  | |  |  | `DEC(7)` | National Natural Gas |
| `BR_GLGNIRatioUnit` |  | |  |  | `UNIT(3)` | Unit of Measurement |
| `BR_GLGNIRatio` |  | |  |  | `DEC(7)` | Imported Natural Gas |
| `BR_GLPNetValueAmount` |  | |  |  | `DEC(15)` | Fuel Net Amount |
| `BR_NFBiodieselMixingIndexRate` |  | |  |  | `DEC(7)` | Biodiesel Mixing Index in Diesel B |
| `SalesDocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base unit of measure |
